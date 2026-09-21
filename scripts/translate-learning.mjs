// A local, offline publishing helper. Never calls an external translation API.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import matter from 'gray-matter';
import { unified } from 'unified';
import parse from 'remark-parse';
import gfm from 'remark-gfm';
import math from 'remark-math';
import { visit, SKIP } from 'unist-util-visit';
import GithubSlugger from 'github-slugger';
import { toString } from 'mdast-util-to-string';

const parser = unified().use(parse).use(gfm).use(math);
const chinese = /[\u3400-\u9fff]/;
export function extract(source) {
  const { data, content } = matter(source);
  const segments = [];
  visit(parser.parse(content), node => {
    if (!['paragraph', 'heading', 'tableCell', 'math', 'code'].includes(node.type)) return;
    const start = node.position.start.offset, end = node.position.end.offset;
    const raw = content.slice(start, end);
    if (chinese.test(raw)) {
      const protectedParts = [];
      let text = raw;
      // Preserve every inline equation verbatim during prose translation.
      if (!['math', 'code'].includes(node.type)) {
        const edits = [];
        visit(node, child => {
          if (['inlineMath', 'inlineCode'].includes(child.type) && !chinese.test(child.value)) {
            const a = child.position.start.offset - start, b = child.position.end.offset - start;
            const token = `⟦${protectedParts.length}⟧`;
            protectedParts.push(raw.slice(a, b)); edits.push({ a, b, token });
          }
        });
        for (const edit of edits.reverse()) text = text.slice(0, edit.a) + edit.token + text.slice(edit.b);
      }
      segments.push({ id: segments.length, type: node.type, start, end, text, protectedParts });
    }
    return SKIP;
  });
  return { data, content, segments };
}

export function translatedSource(source, translations) {
  const { data, content, segments } = extract(source);
  let result = content;
  for (const segment of [...segments].reverse()) {
    let text = translations.segments[segment.id];
    if (typeof text !== 'string' || chinese.test(text)) throw new Error(`Missing English segment ${segment.id}`);
    for (const [index, value] of segment.protectedParts.entries()) {
      const token = `⟦${index}⟧`;
      if (text.split(token).length !== 2) throw new Error(`Equation placeholder ${segment.id}/${index} must appear exactly once`);
      text = text.replace(token, value);
    }
    if (/⟦\d+⟧/.test(text)) throw new Error(`Unknown placeholder in ${segment.id}`);
    result = result.slice(0, segment.start) + text + result.slice(segment.end);
  }
  const headingIds = text => {
    const ids = [], slugger = new GithubSlugger();
    visit(parser.parse(text), 'heading', node => ids.push(slugger.slug(toString(node))));
    return ids;
  };
  // Relative in-page links must follow the translated heading, including Chinese URLs.
  const oldIds = headingIds(content), newIds = headingIds(result);
  if (oldIds.length !== newIds.length) throw new Error('Translation changed heading count');
  const map = new Map(oldIds.map((id, i) => [id, newIds[i]]));
  result = result.replace(/\]\(#([^\s)]+)\)/g, (all, id) => {
    const replacement = map.get(decodeURIComponent(id));
    return replacement ? `](#${replacement})` : all;
  });
  const metadata = { ...data, title: translations.title, description: translations.description,
    sourceHash: crypto.createHash('sha256').update(source).digest('hex'), translation: 'AI-assisted English translation' };
  return matter.stringify(result, metadata);
}

if (process.argv[2]) {
  const [command, filename, arg, end] = process.argv.slice(2);
  const source = fs.readFileSync(filename, 'utf8');
  if (command === 'extract') {
    const { segments } = extract(source);
    console.log(JSON.stringify({ count: segments.length, segments: segments.slice(Number(arg || 0), end ? Number(end) : undefined).map(({id, type, text}) => ({id, type, text})) }));
  } else if (command === 'patch') {
    const result = translatedSource(source, JSON.parse(fs.readFileSync(arg, 'utf8')));
    const target = path.join(path.dirname(filename), 'en', path.basename(filename));
    console.log(JSON.stringify({ patch: `*** Begin Patch\n*** Add File: ${target}\n${result.trimEnd().split('\n').map(line => '+' + line).join('\n')}\n*** End Patch` }));
  } else throw new Error('Use extract <source> [start] [end] or patch <source> <translation.json>');
}

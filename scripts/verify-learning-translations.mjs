import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import matter from 'gray-matter';
import { unified } from 'unified';
import parse from 'remark-parse';
import gfm from 'remark-gfm';
import math from 'remark-math';
import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';
import GithubSlugger from 'github-slugger';
import katex from 'katex';
import { prepareLearningMarkdown } from '../lib/learning-markdown.ts';

const parser = unified().use(parse).use(gfm).use(math);
const collect = (tree, type) => { const nodes = []; visit(tree, type, n => nodes.push(n)); return nodes; };
const root = path.join(process.cwd(), 'content/learning');
let published = 0, formulas = 0;
const pending = [];
for (const category of fs.readdirSync(root, { withFileTypes: true }).filter(f => f.isDirectory())) {
  const dir = path.join(root, category.name);
  for (const name of fs.readdirSync(dir).filter(f => f.endsWith('.md'))) {
    const original = fs.readFileSync(path.join(dir, name), 'utf8');
    const zh = matter(original);
    if (zh.data.draft === true) continue;
    const target = path.join(dir, 'en', name);
    if (!fs.existsSync(target)) { pending.push(`${category.name}/${name}`); continue; }
    const en = matter(fs.readFileSync(target, 'utf8'));
    if (en.data.draft === true) { pending.push(`${category.name}/${name}`); continue; }
    assert.equal(en.data.sourceHash, crypto.createHash('sha256').update(original).digest('hex'), `${name}: stale source hash`);
    assert(en.data.title && en.data.description, `${name}: English metadata missing`);
    assert(!/[\u3400-\u9fff]/.test(`${en.data.title} ${en.data.description}`), `${name}: untranslated metadata`);
    const firstHeading = en.content.match(/^\s*#\s+([^\n]+)/);
    if (firstHeading) assert.equal(firstHeading[1].trim(), en.data.title.trim(), `${name}: leading H1 must match the page title`);
    assert(!/[\u3400-\u9fff]|⟦\d+⟧/.test(en.content), `${name}: untranslated text or placeholder`);
    const trees = [zh.content, en.content].map(text => parser.parse(prepareLearningMarkdown(text)));
    for (const type of ['heading', 'list', 'listItem', 'table', 'tableRow', 'code', 'blockquote']) {
      assert.equal(collect(trees[0], type).length, collect(trees[1], type).length, `${name}: changed ${type} count`);
    }
    const equations = trees.map(tree => {
      const result = []; visit(tree, n => { if (n.type === 'math' || n.type === 'inlineMath') result.push(n); }); return result;
    });
    assert.equal(equations[0].length, equations[1].length, `${name}: equation count changed`);
    const normalize = value => value.replace(/\\text\{[^{}]*\}/g, '\\text{TRANSLATED}');
    // English grammar can reorder inline equations within a sentence.
    assert.deepEqual(equations[1].map(n => normalize(n.value)).sort(), equations[0].map(n => normalize(n.value)).sort(), `${name}: equations changed beyond text labels`);
    equations[1].forEach(node => {
      katex.renderToString(node.value, { displayMode: node.type === 'math', strict: 'ignore', trust: false, throwOnError: true });
    });
    const external = tree => collect(tree, 'link').map(n => n.url).filter(url => /^(?:https?:|mailto:)/.test(url)).sort();
    assert.deepEqual(external(trees[0]), external(trees[1]), `${name}: external references changed`);
    const slugger = new GithubSlugger();
    const body = en.content.replace(/^\s*#\s+[^\n]+\n/, '');
    const tree = parser.parse(body);
    const ids = collect(tree, 'heading').map(n => slugger.slug(toString(n)));
    for (const link of collect(tree, 'link').filter(n => n.url.startsWith('#'))) {
      assert(ids.includes(decodeURIComponent(link.url.slice(1))), `${name}: broken anchor ${link.url}`);
    }
    published++; formulas += equations[1].length;
    console.log(`PASS ${category.name}/${name}: ${equations[1].length} formulas`);
  }
}
console.log(JSON.stringify({ translated: published, formulas, pending }, null, 2));
if (process.argv.includes('--require-complete')) assert.equal(pending.length, 0, 'Finish all English notes before publishing the bilingual release.');

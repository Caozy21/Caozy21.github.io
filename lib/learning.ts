import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { cache } from 'react';
import { createHash } from 'node:crypto';
import { englishNoteTitles, type LearningLanguage } from './learning-language';
import { learningCategories, type LearningNoteSummary } from './learning-categories';

export interface LearningNote extends LearningNoteSummary {
  content: string;
}

export function getLearningCategory(slug: string) {
  return learningCategories.find((category) => category.slug === slug);
}

// Files are read only at build time; no server or database is needed on GitHub Pages.
export const getLearningNotes = cache((categorySlug: string, language: LearningLanguage = 'zh'): LearningNote[] => {
  if (!getLearningCategory(categorySlug)) return [];
  const directory = path.join(process.cwd(), 'content', 'learning', categorySlug);
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory, { withFileTypes: true })
    .filter((file) => file.isFile() && /\.md$/i.test(file.name))
    .flatMap((file): LearningNote[] => {
      const slug = file.name.replace(/\.md$/i, '');
      const source = fs.readFileSync(path.join(directory, file.name), 'utf8');
      const original = matter(source);
      if (original.data.draft === true) return [];
      const translatedPath = path.join(directory, 'en', file.name);
      const translation = fs.existsSync(translatedPath) ? matter(fs.readFileSync(translatedPath, 'utf8')) : null;
      const available = Boolean(translation && translation.data.draft !== true);
      if (available && translation!.data.sourceHash !== createHash('sha256').update(source).digest('hex')) {
        throw new Error(`${file.name}: English translation is stale. Update it and sourceHash, or set its draft to true.`);
      }
      if (available && (typeof translation!.data.title !== 'string' || !translation!.data.title.trim() || typeof translation!.data.description !== 'string')) {
        throw new Error(`${file.name}: English title and description are required.`);
      }
      if (language === 'en' && !available) return [];
      const selected = language === 'en' ? translation! : original;
      const content = selected.content;
      const data = { ...original.data, ...selected.data };
      const originalTitle = original.data.title || original.content.match(/^\s*#\s+(.+?)(?:\r?\n|$)/)?.[1] || slug;
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
        throw new Error(`${file.name}: use lowercase English letters, numbers, and hyphens for Markdown filenames.`);
      }

      const firstHeading = content.match(/^\s*#\s+(.+?)(?:\r?\n|$)/);
      const title = typeof data.title === 'string' && data.title.trim()
        ? data.title.trim() : firstHeading?.[1].trim() || slug.replace(/-/g, ' ');
      // A leading H1 supplies the page title for plain Markdown files.
      const body = firstHeading && firstHeading[1].trim() === title
        ? content.slice(firstHeading[0].length) : content;
      let date: string | null = null;
      if (data.date !== undefined) {
        date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date);
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date) {
          throw new Error(`${file.name}: date must be a valid YYYY-MM-DD date.`);
        }
      }
      const tags = Array.isArray(data.tags) ? data.tags.filter((tag): tag is string => typeof tag === 'string') : [];
      const cjkCount = (body.match(/[\u3400-\u9fff]/g) || []).length;
      const wordCount = body.replace(/[\u3400-\u9fff]/g, '').split(/\s+/).filter(Boolean).length;

      return [{
        slug, title, date, tags, content: body,
        alternateTitle: language === 'en' ? originalTitle : available ? translation!.data.title : englishNoteTitles[slug] || null,
        englishAvailable: available,
        description: typeof data.description === 'string' ? data.description : '',
        order: typeof data.order === 'number' && Number.isFinite(data.order) ? data.order : Number.MAX_SAFE_INTEGER,
        readingMinutes: Math.max(1, Math.ceil(wordCount / 200 + cjkCount / 400)),
      }];
    })
    .sort((a, b) => a.order - b.order || (b.date || '').localeCompare(a.date || '') || a.slug.localeCompare(b.slug));
});

export function getLearningNoteSummaries(categorySlug: string, language: LearningLanguage = 'zh'): LearningNoteSummary[] {
  return getLearningNotes(categorySlug, language).map(({ content, ...summary }) => summary);
}

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { cache } from 'react';
import { learningCategories, type LearningNoteSummary } from './learning-categories';

export interface LearningNote extends LearningNoteSummary {
  content: string;
}

export function getLearningCategory(slug: string) {
  return learningCategories.find((category) => category.slug === slug);
}

// Files are read only at build time; no server or database is needed on GitHub Pages.
export const getLearningNotes = cache((categorySlug: string): LearningNote[] => {
  if (!getLearningCategory(categorySlug)) return [];
  const directory = path.join(process.cwd(), 'content', 'learning', categorySlug);
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory, { withFileTypes: true })
    .filter((file) => file.isFile() && /\.md$/i.test(file.name))
    .flatMap((file): LearningNote[] => {
      const slug = file.name.replace(/\.md$/i, '');
      const source = fs.readFileSync(path.join(directory, file.name), 'utf8');
      const { data, content } = matter(source);
      if (data.draft === true) return [];
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
        description: typeof data.description === 'string' ? data.description : '',
        order: typeof data.order === 'number' && Number.isFinite(data.order) ? data.order : Number.MAX_SAFE_INTEGER,
        readingMinutes: Math.max(1, Math.ceil(wordCount / 200 + cjkCount / 400)),
      }];
    })
    .sort((a, b) => a.order - b.order || (b.date || '').localeCompare(a.date || '') || a.slug.localeCompare(b.slug));
});

export function getLearningNoteSummaries(categorySlug: string): LearningNoteSummary[] {
  return getLearningNotes(categorySlug).map(({ content, ...summary }) => summary);
}

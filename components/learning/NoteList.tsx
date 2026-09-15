'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Search } from 'lucide-react';
import LearningAnimation from './LearningAnimation';
import { formatNoteDate, type LearningNoteSummary } from '@/lib/learning-categories';

export default function NoteList({ category, notes }: { category: string; notes: LearningNoteSummary[] }) {
  const [query, setQuery] = useState('');
  const filtered = notes.filter((note) => `${note.title} ${note.description} ${note.tags.join(' ')}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));

  if (notes.length === 0) {
    return (
      <LearningAnimation className="mx-auto max-w-3xl rounded-lg border bg-card p-10 sm:p-16 text-center shadow-sm">
        <BookOpen className="mx-auto mb-5 h-8 w-8 text-muted-foreground" />
        <h2 className="text-xl font-bold mb-3">Notes are on their way</h2>
        <p className="text-muted-foreground">This collection is just beginning. Check back soon for new study notes.</p>
      </LearningAnimation>
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'note' : 'notes'}{query.trim() ? ' found' : ' in this collection'}</p>
        <div className="relative w-full sm:max-w-xs">
          <label htmlFor="note-search" className="sr-only">Search notes by title, description, or tag</label>
          <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <input id="note-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search notes…" className="h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
        </div>
      </div>
      <div className="space-y-4">
        {filtered.map((note, index) => (
          <LearningAnimation key={note.slug} index={index}>
            <Link href={`/learning/${category}/${note.slug}`} className="group block rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-bold break-words min-w-0">{note.title}</h2>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary" />
              </div>
              {note.description && <p className="mt-2 text-muted-foreground">{note.description}</p>}
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                {note.date && <time dateTime={note.date}>{formatNoteDate(note.date)}</time>}
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{note.readingMinutes} min read</span>
                {note.tags.map((tag) => <span key={tag} className="rounded-full bg-muted px-2 py-1">{tag}</span>)}
              </div>
            </Link>
          </LearningAnimation>
        ))}
      </div>
      {filtered.length === 0 && <div className="rounded-lg border bg-card p-10 text-center"><p className="text-muted-foreground mb-3">No notes match your search.</p><button onClick={() => setQuery('')} className="text-sm font-medium underline underline-offset-4">Clear search</button></div>}
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import SectionContainer from '@/components/common/SectionContainer';
import LearningAnimation from '@/components/learning/LearningAnimation';
import MarkdownContent, { getNoteHeadings } from '@/components/learning/MarkdownContent';
import NoteList from '@/components/learning/NoteList';
import { formatNoteDate, learningCategories } from '@/lib/learning-categories';
import { getLearningCategory, getLearningNotes, getLearningNoteSummaries } from '@/lib/learning';

type PageProps = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

// Categories and notes share a route so an entirely empty notebook still exports.
export function generateStaticParams() {
  return learningCategories.flatMap((category) => [
    { slug: [category.slug] },
    ...getLearningNotes(category.slug).map((note) => ({ slug: [category.slug, note.slug] })),
  ]);
}

function resolvePage(segments: string[]) {
  const category = getLearningCategory(segments[0]);
  if (!category || segments.length > 2) notFound();
  const notes = getLearningNotes(category.slug);
  const note = segments[1] ? notes.find((item) => item.slug === segments[1]) : undefined;
  if (segments[1] && !note) notFound();
  return { category, notes, note };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, note } = resolvePage((await params).slug);
  return {
    title: `${note?.title || category.title} | Learning | Zhuoya Cao`,
    description: note?.description || category.description,
  };
}

export default async function LearningContentPage({ params }: PageProps) {
  const { category, notes, note } = resolvePage((await params).slug);

  if (!note) {
    return (
      <div className="pt-24">
        <SectionContainer>
          <Link href="/learning" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" />All learning topics</Link>
          <PageHeader title={category.title} description={category.description} />
          <NoteList category={category.slug} notes={getLearningNoteSummaries(category.slug)} />
        </SectionContainer>
      </div>
    );
  }

  const headings = getNoteHeadings(note.content);
  const index = notes.findIndex((item) => item.slug === note.slug);
  const previous = notes[index - 1];
  const next = notes[index + 1];
  const contents = (
    <ol className="space-y-3 text-sm">
      {headings.map((heading) => <li key={heading.id} className={heading.depth === 3 ? 'pl-4' : ''}><a className="text-muted-foreground hover:text-primary break-words" href={`#${heading.id}`}>{heading.title}</a></li>)}
    </ol>
  );

  return (
    <div className="pt-24">
      <SectionContainer>
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/learning" className="hover:text-primary">Learning</Link><span aria-hidden="true">/</span>
          <Link href={`/learning/${category.slug}`} className="hover:text-primary">{category.title}</Link><span aria-hidden="true">/</span>
          <span className="text-primary" aria-current="page">{note.title}</span>
        </nav>
        <LearningAnimation>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_220px] gap-12 xl:gap-16">
            <article className="min-w-0 max-w-3xl w-full mx-auto">
              <header className="border-b pb-8 mb-8">
                <Link href={`/learning/${category.slug}`} className="text-sm text-muted-foreground hover:text-primary">{category.title}</Link>
                <h1 className="mt-3 mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight break-words">{note.title}</h1>
                {note.description && <p className="text-lg text-muted-foreground leading-relaxed">{note.description}</p>}
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  {note.date && <time dateTime={note.date}>{formatNoteDate(note.date)}</time>}
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{note.readingMinutes} min read</span>
                  {note.tags.map((tag) => <span key={tag} className="rounded-full bg-muted px-2.5 py-1 text-xs">{tag}</span>)}
                </div>
              </header>
              {headings.length > 0 && <details className="lg:hidden mb-8 rounded-lg border bg-card p-4"><summary className="cursor-pointer font-medium">On this page</summary><nav className="mt-4" aria-label="Mobile table of contents">{contents}</nav></details>}
              <MarkdownContent content={note.content} category={category.slug} slug={note.slug} />
              <nav aria-label="Note navigation" className="mt-12 border-t pt-6">
                <Link href={`/learning/${category.slug}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" />Back to {category.title}</Link>
                {(previous || next) && <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {previous ? <Link href={`/learning/${category.slug}/${previous.slug}`} className="rounded-lg border bg-card p-4 hover:shadow-md transition-shadow"><span className="mb-2 flex items-center gap-2 text-xs text-muted-foreground"><ArrowLeft className="h-3 w-3" />Previous note</span><span className="font-medium">{previous.title}</span></Link> : <div />}
                  {next && <Link href={`/learning/${category.slug}/${next.slug}`} className="rounded-lg border bg-card p-4 hover:shadow-md transition-shadow sm:text-right"><span className="mb-2 flex items-center gap-2 sm:justify-end text-xs text-muted-foreground">Next note<ArrowRight className="h-3 w-3" /></span><span className="font-medium">{next.title}</span></Link>}
                </div>}
              </nav>
            </article>
            <aside className="hidden lg:block">
              {headings.length > 0 && <nav aria-label="Table of contents" className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto border-l pl-5 py-1"><h2 className="text-sm font-semibold mb-5">On this page</h2>{contents}</nav>}
            </aside>
          </div>
        </LearningAnimation>
      </SectionContainer>
    </div>
  );
}

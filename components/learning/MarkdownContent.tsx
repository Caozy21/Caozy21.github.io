import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';
import GithubSlugger from 'github-slugger';

export function getNoteHeadings(content: string) {
  const tree = unified().use(remarkParse).use(remarkGfm).use(remarkMath).parse(content);
  const slugger = new GithubSlugger();
  const headings: { id: string; title: string; depth: number }[] = [];
  visit(tree, 'heading', (node) => {
    const title = toString(node);
    const id = slugger.slug(title);
    if (node.depth <= 3) headings.push({ id, title, depth: node.depth });
  });
  return headings;
}

export default function MarkdownContent({ content, category, slug }: { content: string; category: string; slug: string }) {
  return (
    <div className="learning-markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeSlug, [rehypeKatex, { strict: 'ignore', trust: false }]]}
        skipHtml
        components={{
          a: ({ node, href, children, ...props }) => {
            let destination = href;
            // Relative links between uploaded .md files become website links.
            if (href && !/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href)) {
              const url = new URL(href, `https://learning.local/learning/${category}/${slug}`);
              if (/\.md$/i.test(url.pathname)) destination = url.pathname.replace(/\.md$/i, '') + url.search + url.hash;
            }
            const external = /^https?:\/\//i.test(destination || '');
            return <a {...props} href={destination} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{children}</a>;
          },
          table: ({ node, ...props }) => <div className="learning-table" tabIndex={0} role="region" aria-label="Scrollable table"><table {...props} /></div>,
          img: ({ node, alt, ...props }) => (
            // Markdown images can have arbitrary dimensions, including remote images.
            // eslint-disable-next-line @next/next/no-img-element
            <img {...props} alt={alt || ''} loading="lazy" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

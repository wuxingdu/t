import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx-components";
import { formatDate, getEntries, getEntry } from "@/lib/content";

export function generateStaticParams() {
  return getEntries("posts").map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry("posts", slug);
  return {
    title: entry ? `${entry.title} | Jingle` : "个人记录 | Jingle",
    description: entry?.summary,
  };
}

export default async function PostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEntry("posts", slug);
  if (!entry) notFound();

  return (
    <main className="detail-page post-detail">
      <article>
        <header className="detail-hero">
          <p className="eyebrow">{entry.eyebrow}</p>
          <h1>{entry.title}</h1>
          <p>{entry.summary}</p>
          <div className="detail-meta">
            <span>{formatDate(entry.date)}</span>
          </div>
        </header>
        <div className="mdx-body">
          <MDXRemote
            source={entry.content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>
      </article>
    </main>
  );
}

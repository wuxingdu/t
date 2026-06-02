import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx-components";
import { getAboutContent } from "@/lib/content";

export const metadata = {
  title: "关于 | Jingle",
};

export default function AboutPage() {
  const about = getAboutContent();

  return (
    <main className="detail-page about-page">
      <article>
        <header className="detail-hero">
          <p className="eyebrow">{about.eyebrow}</p>
          <h1>{about.title}</h1>
          <p>{about.summary}</p>
        </header>
        <div className="about-grid">
          <img src={about.cover} alt="" className="about-portrait" />
          <div className="mdx-body">
            <MDXRemote
              source={about.content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
        </div>
      </article>
    </main>
  );
}

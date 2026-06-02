import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { formatDate, getEntries } from "@/lib/content";

export const metadata = {
  title: "个人记录 | Jingle",
};

export default function PostsPage() {
  const entries = getEntries("posts");

  return (
    <main className="listing-page journal-page">
      <SectionHeading
        eyebrow="Journal"
        title="个人记录"
        intro="写给自己，也写给愿意路过的人：关于内容、品牌、工具和运营判断。"
      />
      <div className="post-index">
        {entries.map((entry) => (
          <Link key={entry.slug} href={`/posts/${entry.slug}`} className="post-row" data-animate>
            <span>{formatDate(entry.date)}</span>
            <strong>{entry.title}</strong>
            <em>{entry.summary}</em>
            <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </main>
  );
}

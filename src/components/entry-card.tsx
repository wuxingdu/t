import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Entry, collectionLabels } from "@/lib/content";

type EntryCardProps = {
  entry: Entry;
  variant?: "large" | "compact";
};

export function EntryCard({ entry, variant = "compact" }: EntryCardProps) {
  const href = `/${entry.collection}/${entry.slug}`;

  return (
    <Link className={`entry-card entry-card--${variant}`} href={href} data-animate>
      <span className="card-image-wrap" aria-hidden="true">
        <img src={entry.cover} alt="" className="card-image" />
      </span>
      <span className="card-copy">
        <span className="card-meta">
          {entry.eyebrow ?? collectionLabels[entry.collection]}
          <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <strong>{entry.title}</strong>
        <span>{entry.summary}</span>
        {entry.tags?.length ? (
          <span className="tag-row" aria-label="标签">
            {entry.tags.slice(0, 3).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </span>
        ) : null}
      </span>
    </Link>
  );
}

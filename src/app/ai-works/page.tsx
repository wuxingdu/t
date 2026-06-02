import { EntryCard } from "@/components/entry-card";
import { SectionHeading } from "@/components/section-heading";
import { getEntries } from "@/lib/content";

export const metadata = {
  title: "AI 设计作品 | Jingle",
};

export default function AiWorksPage() {
  const entries = getEntries("ai-works");

  return (
    <main className="listing-page">
      <SectionHeading
        eyebrow="AI Visual Lab"
        title="AI 设计作品集"
        intro="围绕电商品牌内容生产建立的视觉实验：主图概念、详情页氛围、活动视觉与 moodboard。"
      />
      <div className="listing-grid">
        {entries.map((entry) => (
          <EntryCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </main>
  );
}

import { EntryCard } from "@/components/entry-card";
import { SectionHeading } from "@/components/section-heading";
import { getEntries } from "@/lib/content";

export const metadata = {
  title: "运营案例 | Jingle",
};

export default function CasesPage() {
  const entries = getEntries("cases");

  return (
    <main className="listing-page">
      <SectionHeading
        eyebrow="Case Archive"
        title="运营案例"
        intro="以项目背景、品牌语境、内容策略、执行动作和复盘观察来呈现，不公开敏感品牌名与数据。"
      />
      <div className="listing-grid">
        {entries.map((entry) => (
          <EntryCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </main>
  );
}

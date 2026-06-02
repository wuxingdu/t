import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EntryCard } from "@/components/entry-card";
import { SectionHeading } from "@/components/section-heading";
import { getFeaturedEntries } from "@/lib/content";

export default function Home() {
  const cases = getFeaturedEntries("cases", 3);
  const aiWorks = getFeaturedEntries("ai-works", 4);
  const posts = getFeaturedEntries("posts", 3);

  return (
    <main>
      <section className="hero">
        <div className="hero-copy-block">
          <p className="eyebrow hero-kicker">Brand Content Operator</p>
          <h1 className="hero-title">Jingle</h1>
          <p className="hero-copy">
            品牌内容型电商运营。关注商品语境、内容节奏、陈列体验与复盘记录，把每一次项目过程整理成可继续生长的作品。
          </p>
          <dl className="hero-ledger" aria-label="能力摘要">
            <div>
              <dt>Focus</dt>
              <dd>品牌内容 / 商品表达 / 活动策划</dd>
            </div>
            <div>
              <dt>Archive</dt>
              <dd>运营案例 / AI 视觉 / 个人记录</dd>
            </div>
          </dl>
        </div>
        <div className="hero-visual" aria-label="品牌内容作品视觉拼贴">
          <img className="hero-visual-piece piece-a" src="/visuals/hero-editorial.svg" alt="" />
          <img className="hero-visual-piece piece-b" src="/visuals/case-window.svg" alt="" />
          <img className="hero-visual-piece piece-c" src="/visuals/ai-moodboard.svg" alt="" />
        </div>
      </section>

      <section className="page-section">
        <SectionHeading
          eyebrow="Case Notes"
          title="代表运营案例"
          intro="不展示敏感数据，以品牌语境、内容策略、执行动作和复盘观察呈现项目判断。"
        />
        <div className="feature-grid">
          {cases.map((entry, index) => (
            <EntryCard key={entry.slug} entry={entry} variant={index === 0 ? "large" : "compact"} />
          ))}
        </div>
      </section>

      <section className="page-section tinted-section">
        <SectionHeading
          eyebrow="AI Visual Lab"
          title="AI 辅助品牌内容设计"
          intro="把 AI 作为内容生产的草图工具，探索主图概念、详情页视觉和活动氛围。"
        />
        <div className="work-strip">
          {aiWorks.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </section>

      <section className="page-section journal-section">
        <SectionHeading
          eyebrow="Journal"
          title="个人记录与运营观察"
          intro="记录电商内容、品牌表达、工具实践和项目复盘中的细小判断。"
        />
        <div className="journal-list">
          {posts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} className="journal-link" data-animate>
              <span>{post.eyebrow}</span>
              <strong>{post.title}</strong>
              <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

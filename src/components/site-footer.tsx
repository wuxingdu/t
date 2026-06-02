import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">Brand Content Operator</p>
        <h2>把品牌内容做成可以持续复盘的作品。</h2>
      </div>
      <div className="footer-links">
        <Link href="/cases">运营案例</Link>
        <Link href="/ai-works">AI 设计作品</Link>
        <Link href="/posts">个人记录</Link>
      </div>
    </footer>
  );
}

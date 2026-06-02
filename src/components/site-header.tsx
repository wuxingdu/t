import Link from "next/link";

const navItems = [
  { href: "/cases", label: "案例" },
  { href: "/ai-works", label: "AI 作品" },
  { href: "/posts", label: "记录" },
  { href: "/about", label: "关于" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-mark" href="/" aria-label="回到首页">
        Jingle
      </Link>
      <nav className="site-nav" aria-label="主导航">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

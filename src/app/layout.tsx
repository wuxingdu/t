import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MotionLayer } from "@/components/motion-layer";

export const metadata: Metadata = {
  title: "Jingle | 品牌内容型电商运营",
  description: "Jingle 的电商运营案例、AI 设计作品与个人记录。",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <MotionLayer />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

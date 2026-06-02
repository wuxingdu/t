import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Collection = "cases" | "ai-works" | "posts";

export type EntryMeta = {
  title: string;
  eyebrow?: string;
  summary: string;
  date?: string;
  cover: string;
  tags?: string[];
  featured?: boolean;
  order?: number;
  role?: string;
  scene?: string;
};

export type Entry = EntryMeta & {
  slug: string;
  collection: Collection;
  content: string;
};

const contentRoot = path.join(process.cwd(), "content");

function collectionPath(collection: Collection) {
  return path.join(contentRoot, collection);
}

function mdxFiles(collection: Collection) {
  const dir = collectionPath(collection);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

export function getEntry(collection: Collection, slug: string): Entry | null {
  const filePath = path.join(collectionPath(collection), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const meta = data as EntryMeta;

  return {
    ...meta,
    slug,
    collection,
    content,
    tags: meta.tags ?? [],
  };
}

export function getEntries(collection: Collection): Entry[] {
  return mdxFiles(collection)
    .map((file) => getEntry(collection, file.replace(/\.mdx$/, "")))
    .filter((entry): entry is Entry => Boolean(entry))
    .sort((a, b) => {
      const orderA = a.order ?? 100;
      const orderB = b.order ?? 100;
      if (orderA !== orderB) return orderA - orderB;
      return new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime();
    });
}

export function getFeaturedEntries(collection: Collection, limit = 3) {
  return getEntries(collection)
    .filter((entry) => entry.featured)
    .slice(0, limit);
}

export function getAboutContent() {
  const filePath = path.join(contentRoot, "pages", "about.mdx");
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    ...(data as EntryMeta),
    content,
  };
}

export function formatDate(date?: string) {
  if (!date) return "未标注日期";
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export const collectionLabels: Record<Collection, string> = {
  cases: "运营案例",
  "ai-works": "AI 设计",
  posts: "记录",
};

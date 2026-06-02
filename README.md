# Jingle Portfolio

Jingle 的个人作品与记录网站，面向品牌内容型电商运营展示、AI 设计作品集和长期博客记录。

## Tech Stack

- Next.js App Router
- SSG pages generated from MDX content
- GSAP interaction motion
- Markdown/MDX content stored in `content/`

## Content

Update content by editing MDX files:

- `content/cases`
- `content/ai-works`
- `content/posts`
- `content/pages/about.mdx`

Every file uses frontmatter for title, summary, cover, tags, and ordering.

## Development

```bash
npm install
npm run dev
```

## Deploy

Push the repository to GitHub and connect it to Vercel. Vercel will run:

```bash
npm run build
```

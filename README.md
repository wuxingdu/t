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

This repository includes a GitHub Actions workflow for Vercel deployments:

- Push to `main`: production deployment
- Pull request: preview deployment
- Manual run: available from the Actions tab

Add these repository secrets in GitHub before running the workflow:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

You can get `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` after linking the project locally with Vercel; they are stored in `.vercel/project.json`. Do not commit `.vercel/`.

The workflow runs:

```bash
vercel pull
vercel build
vercel deploy --prebuilt
```

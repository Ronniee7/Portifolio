# Asiimwe Ronald — Professional Portfolio

Personal portfolio website built with Astro, TypeScript, and Tailwind CSS. Static, fast, accessible, and content-driven.

## Technology stack
- Astro 7 (static generation)
- TypeScript (strict)
- Tailwind CSS 4
- Astro Content Collections (projects, research, publications, writing, engineering)
- @lucide/astro icons, mermaid diagrams
- GitHub Actions CI

## Local setup
```bash
npm install
npm run dev
```

## Commands
- `npm run dev` — dev server
- `npm run build` — production build
- `npm run preview` — preview build
- `npm run check` — Astro type/content check
- `npm run lint` — ESLint
- `npm run format` — Prettier

## Folder structure
- `src/pages` — routes
- `src/components` — UI, layout, sections
- `src/content` — Markdown content collections
- `src/data` — structured data (profile, experience, skills, etc.)
- `public` — static assets

## Content management
See `CONTENT_GUIDE.md`. Edit Markdown files in `src/content/` and data files in `src/data/`.

## Deployment
See `DEPLOYMENT.md`. Preferred: Cloudflare Pages.

## Environment variables
- `SITE_URL` — production canonical URL (default `https://asiimweronald.pages.dev`).

## Contact form configuration
The form currently uses a mailto action. To enable real submissions, configure a free form provider or a Cloudflare Pages Function. Do not hardcode secrets.

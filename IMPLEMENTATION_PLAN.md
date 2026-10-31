# IMPLEMENTATION PLAN — ASIIMWE RONALD PORTFOLIO

Version: 1.0
Date: 2026-10-30
Status: Phase 1 — Architecture and setup

## 1. Source of Truth
- CLINE_GUIDE.md — authoritative professional content.
- CONTENT_GUIDE.md — how to update content (Phase 8).
- DEPLOYMENT.md — deployment procedure (Phase 10).

## 2. Repository Inspection Summary
Existing state before implementation:
- README.md — placeholder only.
- .gitignore — empty.
- CLINE_GUIDE.md — full professional content guide (renamed from cline.md).
- No application code, configuration, or CI/CD.
Conclusion: greenfield Astro project. No existing work to preserve.

## 3. Professional Positioning
Name: Asiimwe Ronald
Title: Software Engineer | AI/ML Engineer | Researcher
Headline: "Engineering Software. Advancing Intelligence."
Affiliation: NUIST — Master of Artificial Intelligence (Sep 2026 – Jul 2028)
Previous degree: BSc Information Systems and Technology, Makerere University (Feb 2021 – Jun 2023)

## 4. Technology Stack
- Astro 7.x (static generation)
- TypeScript (strict mode)
- Tailwind CSS 4.x (via @tailwindcss/vite)
- Astro Content Collections (projects, research, writing)
- @lucide/astro icons
- mermaid (client-side diagrams)
- @tailwindcss/typography
- ESLint + Prettier
- GitHub Actions CI/CD
- Cloudflare Pages hosting
No React or heavy frameworks unless a feature genuinely requires them.

## 5. Proposed Folder Structure
src/components/{ui,layout,sections,cards,seo}
src/content/{config.ts,projects,research,writing}
src/data/{profile,experience,skills,education,navigation,social-links}.ts
src/layouts/{BaseLayout,ArticleLayout}.astro
src/pages/{index,404}.astro + projects/, research/, writing/ routes
src/styles/global.css
src/utils/{github,seo}.ts
public/{cv,images,diagrams,favicon.svg,robots.txt}
.github/workflows/{ci,deploy}.yml

## 6. Information Architecture
Single-page home with anchored sections:
Home (hero) -> About -> Experience -> Projects -> Research -> Engineering Lab -> Skills -> Open Source -> Writing -> Education -> Testimonials (hidden if empty) -> Contact.
Dedicated detail routes: /projects, /projects/[slug], /research, /research/[slug], /writing, /writing/[slug].
Navigation links point to section anchors on home; "View all" links reach index pages.

## 7. Content Model
Astro Content Collections with Zod schemas:
- projects: title, description, status, category, technologies[], image, githubUrl?, liveUrl?, body.
- research: title, authors[], institution, area, abstract, keywords[], status, pdfUrl?, doi?, publicationUrl?.
- writing: title, description, pubDate, updatedDate?, tags[], category, author, draft?.
Structured data files (TypeScript) for profile, experience, skills, education, navigation, social links.

## 8. Design System (Phase 2)
Default theme: deep charcoal/near-black background, warm white text, restrained electric blue/cyan accent.
Optional light theme via class toggle + localStorage.
Typography: Inter for UI with weight/size hierarchy; system fallback.
Spacing: Tailwind default (4px base).
Components: Button, Card, Badge, Section, Container, Tag.
Micro-interactions respect prefers-reduced-motion.

## 9. Accessibility, SEO, Performance (Phase 9)
Semantic HTML landmarks, skip link, keyboard nav. WCAG AA contrast. Per-page metadata, OG, canonical URLs, sitemap via @astrojs/sitemap, robots.txt. Structured data (Person, Article). Custom 404. Image optimization via Astro Image, lazy loading. Reduced-motion support.

## 10. Security and Quality (Phase 9-10)
TypeScript strict mode. ESLint (astro + typescript-eslint) + Prettier. astro check. GitHub Actions: install, lint, typecheck, build. No secrets; contact form via mailto fallback or configurable free service via env var.

## 11. Content TODO
See CONTENT_TODO.md. Key gaps: GitHub URL, email, LinkedIn, ResearchGate/ORCID/Google Scholar, photo, CV PDF, availability, verified per-project details, YCBN precise title, Drought Guard verified responsibilities, ICTM 2026 final publication status, NASA C-MAPSS completion status, certifications (none verified), testimonials (none verified).

## 12. Phases and Commit Strategy
Phase 1 — inspection, architecture, plan, setup.
Phase 2 — design system, typography, colors, navigation, reusable components.
Phase 3 — Hero, About, Experience.
Phase 4 — project gallery and detail pages.
Phase 5 — research, publications, writing.
Phase 6 — Engineering Laboratory and visualizations.
Phase 7 — skills, education, open-source integration.
Phase 8 — contact, CV generation, content management + CONTENT_GUIDE.md.
Phase 9 — SEO, accessibility, performance, testing.
Phase 10 — deployment, DEPLOYMENT.md, final QA.
Each meaningful feature committed separately with conventional commits. No broken commits.

## 13. Acceptance Criteria (summary)
All nav links work; pages render; mobile+desktop; filters work; detail pages work; Markdown articles addable; CV download works; contact works or mailto fallback; GitHub integration fails gracefully; theme switching works; no fake metrics/testimonials; no broken links; accessibility checks; production build succeeds; automated checks pass; Cloudflare deployment docs complete; content updates documented.

## 14. Phase 1 Deliverables
- CLINE_GUIDE.md (renamed from cline.md)
- IMPLEMENTATION_PLAN.md
- CONTENT_TODO.md
- Astro project scaffold
- Initial commit
Next phase (Phase 2) begins only after review.

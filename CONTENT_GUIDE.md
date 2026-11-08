# CONTENT GUIDE — ASIIMWE RONALD PORTFOLIO

This guide explains how to add and update content. Engineering Lab content is part of this guide.

## Content Collections

Content lives in `src/content/`:
- `projects/` — project case studies.
- `research/` — research entries.
- `publications/` — publications.
- `writing/` — technical writing articles.
- `engineering/` — engineering deep dives and architecture.

## Adding an Engineering Article

1. Create a new Markdown file in `src/content/engineering/`, e.g. `my-deep-dive.md`.
2. Complete the frontmatter:

```yaml
---
title: Your Title
description: One-sentence summary.
slug: your-slug
category: backend # philosophy | backend | devops | ml-engineering | ai-applications | energy-systems | architecture | practices
tags:
  - tag1
status: implemented # implemented | research-prototype | proposed | in-progress
author: Asiimwe Ronald
pubDate: 2026-10-30
featured: false
order: 9
---
```

3. Write the body in Markdown. Use Mermaid diagrams as raw HTML blocks:

```html
<div class="mermaid">
flowchart TD
    A[Component] --> B[Component]
</div>
```

4. Run `npm run build` and `npx astro check`.

## Adding Architecture Diagrams

- Add diagrams inside engineering articles using `<div class="mermaid">`.
- Label each diagram as **Implemented**, **Research prototype**, or **Proposed** in the surrounding text.
- Keep diagrams readable on mobile: prefer top-down flowcharts and short labels.

## Adding Technical Case Studies

- Use the `projects/` collection for project case studies.
- Link engineering deep dives to relevant projects where useful.

## Engineering Practices

- Update `engineering-standards.md` for changes to standards.
- Keep claims honest: do not invent metrics, deployments, or experience.

## Notes

- The `writing/` collection may be empty; do not create placeholder content.
- Hide unconfigured links rather than showing broken ones.

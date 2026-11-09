# Launch Checklist — Asiimwe Ronald Portfolio

## Content to verify/add
- [ ] Add professional photograph at `public/images/profile/asiimwe-ronald.png`.
- [ ] Verify and add professional email in `src/data/profile.ts`.
- [ ] Verify GitHub URL (currently https://github.com/Ronniee7).
- [ ] Verify LinkedIn URL.
- [ ] Add CV PDF at `public/cv/asiimwe-ronald-cv.pdf` (generate from `CV_SOURCE.md`).
- [ ] Verify employment dates and responsibilities (CONTENT_TODO.md).
- [ ] Verify research publication statuses.
- [ ] Add real project screenshots.
- [ ] Confirm availability statement.

## Deployment
- [ ] Create Cloudflare Pages project connected to GitHub.
- [ ] Set build command `npm run build`, output `dist`.
- [ ] Set `SITE_URL` env var to production domain.
- [ ] Configure custom domain and HTTPS.
- [ ] Configure contact form backend if desired (currently mailto).

## Quality
- [ ] Run `npm run build` and `npx astro check`.
- [ ] Review all pages at mobile and desktop sizes.
- [ ] Verify no broken links.

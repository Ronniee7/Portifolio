# Deployment — Asiimwe Ronald Portfolio

## Cloudflare Pages (preferred)

1. Push the repository to GitHub.
2. In Cloudflare Dashboard → Pages → Create a project → Connect to Git.
3. Select the repository.
4. Build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: 20
5. Environment variables (optional):
   - `SITE_URL` — production domain (e.g. `https://asiimweronald.com`). Defaults to `https://asiimweronald.pages.dev`.
6. Deploy. Preview deployments are created for pull requests automatically.
7. Custom domain: Pages → Custom domains → add domain → follow DNS instructions. HTTPS is provisioned automatically.

## Contact form

The current form uses a mailto action. To enable real submissions:
- Option A: Configure a free form provider (Formspree, Web3Forms) and update the form action.
- Option B: Add a Cloudflare Pages Function under `functions/api/contact.ts` that sends email via an email service (Resend, Mailchannels). Store API keys as Pages environment variables (never in repo).

## GitHub Pages (alternative)

Use a workflow that builds and deploys `dist` to GitHub Pages. Ensure `site` is set to the GitHub Pages URL.

## Environment variables

| Variable | Purpose | Default |
|---|---|---|
| `SITE_URL` | Production canonical URL | `https://asiimweronald.pages.dev` |

import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site?.toString() ?? 'https://asiimweronald.pages.dev';
  const staticPaths = ['', '/projects', '/research', '/publications', '/engineering', '/writing'];
  const urls: string[] = [];
  staticPaths.forEach((p) => urls.push(new URL(p || '/', siteUrl).toString()));

  const projects = await getCollection('projects');
  projects.forEach((p) => urls.push(new URL(`/projects/${p.id}`, siteUrl).toString()));
  const research = await getCollection('research');
  research.forEach((r) => urls.push(new URL(`/research/${r.id}`, siteUrl).toString()));
  const engineering = await getCollection('engineering');
  engineering.forEach((e) => urls.push(new URL(`/engineering/${e.id}`, siteUrl).toString()));
  const writing = (await getCollection('writing')).filter((w) => !w.data.draft);
  writing.forEach((w) => urls.push(new URL(`/writing/${w.id}`, siteUrl).toString()));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

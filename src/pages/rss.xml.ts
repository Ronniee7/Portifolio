import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const posts = (await getCollection('writing'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  const siteUrl = site?.toString() ?? 'https://asiimweronald.pages.dev';

  const items = posts
    .map((p) => {
      const link = new URL(`/writing/${p.id}`, siteUrl).toString();
      return `<item>
        <title>${escapeXml(p.data.title)}</title>
        <link>${link}</link>
        <guid>${link}</guid>
        <description>${escapeXml(p.data.description)}</description>
        <pubDate>${p.data.pubDate.toUTCString()}</pubDate>
        ${p.data.updatedDate ? `<lastBuildDate>${p.data.updatedDate.toUTCString()}</lastBuildDate>` : ''}
        <category>${escapeXml(p.data.category)}</category>
      </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Asiimwe Ronald — Writing</title>
    <link>${siteUrl}</link>
    <description>Technical writing by Asiimwe Ronald.</description>
    <language>en</language>
    <atom:link href="${new URL('/rss.xml', siteUrl).toString()}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};

function escapeXml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

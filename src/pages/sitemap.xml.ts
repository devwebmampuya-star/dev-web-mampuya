import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://devwebmampuya.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`.trim();

  return new Response(sitemapXml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
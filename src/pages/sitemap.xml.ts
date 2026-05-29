import { allPages, pageUrl } from '../data/site';

export function GET() {
  const urls = [
    'https://riskmeter.app/',
    ...allPages.map((page) => pageUrl(page))
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}

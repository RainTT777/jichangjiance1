export async function GET() {
  const robots = `User-agent: *
Allow: /

# Disallow internal redirect paths
Disallow: /go/

# Sitemap Locations
Sitemap: https://jichangjiance.net/sitemap.xml
Sitemap: https://jichangjiance.net/sitemap_index.xml
Sitemap: https://jichangjiance.net/sitemap-index.xml`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
}

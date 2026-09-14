export async function GET() {
  const robots = `User-agent: *
Allow: /

# Disallow internal redirect paths
Disallow: /go/

# Sitemap Location
Sitemap: https://jichangjiance.net/sitemap.xml`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

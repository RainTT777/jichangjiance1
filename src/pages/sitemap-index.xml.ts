import { GET as getSitemap } from './sitemap.xml';

export async function GET() {
  return getSitemap();
}

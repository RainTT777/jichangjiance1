import { createSitemapResponse } from '../utils/sitemap';

export async function GET() {
  return createSitemapResponse();
}

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

<<<<<<< HEAD
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://example.com',
=======
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://yourdomain.com',
>>>>>>> e7d312c4149c0d49821ad728dcd033c438193bbc
  output: 'static',
});

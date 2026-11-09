import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL || 'https://asiimweronald.pages.dev';

export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
  },
});

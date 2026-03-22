import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://digitizedbeing.com',
  base: '/astro-keystatic',
  integrations: [react(), markdoc(), keystatic()],
});

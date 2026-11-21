// @ts-check
import { defineConfig } from 'astro/config';

// Served from GitHub Pages at https://oism1774.github.io/lancamp/
export default defineConfig({
  site: 'https://oism1774.github.io',
  base: '/lancamp',
  output: 'static',
  trailingSlash: 'ignore',
});

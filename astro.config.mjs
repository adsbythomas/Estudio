import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// En producción el sitio se sirve en pl-abogados.com (dominio propio).
// En dev local también usa raíz para evitar prefijos /Estudio.
const SITE = process.env.SITE_URL || 'https://pl-abogados.com';
const BASE = process.env.BASE_PATH || '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});

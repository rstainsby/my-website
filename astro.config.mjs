// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [icon({
    iconDir: 'src/assets/icons',
  })],

  adapter: netlify({
    imageCDN: false,
  })
});
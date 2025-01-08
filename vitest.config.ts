/// <reference types="vitest" />
import { getViteConfig } from "astro/config";
import icon from 'astro-icon';

export default getViteConfig({}, {
  integrations: [icon({
    iconDir: 'src/assets/icons',
  })],
});
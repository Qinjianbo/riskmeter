import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://riskmeter.app',
  integrations: [tailwind({ applyBaseStyles: false })],
  output: 'static'
});

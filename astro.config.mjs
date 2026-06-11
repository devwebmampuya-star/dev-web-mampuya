import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // 1. On importe le moteur React pour Astro

// https://astro.build/config
export default defineConfig({
  // 2. On active React à côté de Tailwind dans les intégrations
  integrations: [tailwind(), react()],
  vite: {
    logLevel: 'info',
  },
  typescript: {
    checkBenchmark: false,
    tsconfig: null
  }
});
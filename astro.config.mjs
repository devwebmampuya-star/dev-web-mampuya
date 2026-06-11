import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite'; // <--- AJOUT SÉCURISÉ

export default defineConfig({
  site: 'https://devwebmampuya.com',
  integrations: [react(), sitemap()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()], // <--- FORCE L'INJECTION DU MOTEUR TAILWIND V4
    ssr: {
      noExternal: ['lucide-react']
    }
  }
});
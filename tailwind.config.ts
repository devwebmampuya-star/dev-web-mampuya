import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdb,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#030303',
          800: '#0A0A0A',
          700: '#121212',
          600: '#1A1A1A',
        },
        premium: {
          neon: '#00FF66',
          gold: '#D4AF37',
          goldLight: '#F3E5AB',
          white: '#FAFAFA',
          gray: '#8E8E93'
        }
      },
      fontFamily: {
        sans: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'neon-glow': '0 0 20px rgba(0, 255, 102, 0.2)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.15)',
      },
      backgroundImage: {
        'radial-gradient-dark': 'radial-gradient(circle at 50% 50%, #121212 0%, #030303 100%)',
      }
    },
  },
  plugins: [],
} satisfies Config;
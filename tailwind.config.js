import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        // Semantic theme colors (preserving VHS color values)
        theme: {
          primary: 'rgb(244, 127, 33)',      // orange - main action color
          secondary: 'rgb(246, 187, 26)',    // yellow - secondary accents
          accent: 'rgb(236, 62, 40)',        // red - highlights
          'accent-alt': 'rgb(157, 36, 73)',  // magenta - alternative highlights
          surface: 'rgb(248, 246, 240)',     // offwhite - surface backgrounds
          text: 'rgb(68, 68, 68)',           // darkgray - main text color
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        mono: ['Courier Prime', 'monospace'],
        'courier-prime': ['Courier Prime', 'monospace'],
        'press-start': ['"Press Start 2P"', 'cursive'],
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};

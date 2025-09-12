import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--biolink-primary-button-background)',
        secondary: 'var(--biolink-secondary-button-background)',
        accent: 'var(--biolink-accent-text-color)',
        default: 'var(--biolink-body-text-color)',
        muted: 'var(--biolink-muted-text-color)',
        // Direct theme colors - no cascading
        theme: {
          primary: 'var(--biolink-primary-button-background)',      // orange - main action color
          secondary: 'var(--biolink-secondary-button-background)',  // yellow - secondary accents
          accent: 'var(--biolink-accent-text-color)',               // red - highlights
          'accent-alt': 'var(--biolink-primary-button-hover-background)',  // magenta - alternative highlights
          surface: 'var(--biolink-section-background)',             // offwhite - surface backgrounds
          text: 'var(--biolink-body-text-color)',                   // darkgray - main text color
        },
      },
      fontFamily: {
        sans: ['var(--biolink-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--biolink-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--biolink-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--biolink-font-mono, monospace)', 'monospace'],
        'courier-prime': ['var(--biolink-font-mono, Courier Prime)', 'monospace'],
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
};

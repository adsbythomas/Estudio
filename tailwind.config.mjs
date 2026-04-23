/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Marca legal — azul profundo, confianza, institucional
        legal: {
          50:  '#f2f5fb',
          100: '#e1e8f4',
          200: '#c3d2e8',
          300: '#94aed4',
          400: '#6283bc',
          500: '#3f63a4',
          600: '#2d4d8a',
          700: '#1a3a6c',
          800: '#142d54',
          900: '#0e1f3d',
          950: '#07122a',
        },
        // Marca contable — terracota / cuero / cobre, calidez y oficio
        ledger: {
          50:  '#fbf3ee',
          100: '#f5e0d2',
          200: '#ebbfa3',
          300: '#dc9670',
          400: '#cb7347',
          500: '#b95a2e',
          600: '#a24824',
          700: '#80371c',
          800: '#5e2914',
          900: '#3f1b0d',
          950: '#260f07',
        },
        // Neutrales editoriales
        ink: {
          50:  '#f7f6f3',
          100: '#ece9e2',
          200: '#d6d1c5',
          300: '#b4ac9a',
          400: '#8c836f',
          500: '#6b6352',
          600: '#524b3e',
          700: '#3d382f',
          800: '#2a2620',
          900: '#181612',
        },
        paper: '#faf8f4',
        parchment: '#f3efe7',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.8rem, 6vw, 5.2rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'hero': ['clamp(2.2rem, 4.5vw, 3.8rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'h2': ['clamp(1.75rem, 3vw, 2.6rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        'eyebrow': '0.22em',
      },
      maxWidth: {
        'prose-lg': '68ch',
        'shell': '1240px',
      },
      animation: {
        'fade-up': 'fadeUp .7s ease-out both',
        'fade-in': 'fadeIn .8s ease-out both',
        'line-grow': 'lineGrow .7s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%': { width: '0' },
          '100%': { width: '48px' },
        },
      },
    },
  },
  plugins: [],
};

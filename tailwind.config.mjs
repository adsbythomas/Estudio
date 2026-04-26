/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ═══════════════════════════════════════════════════════════
        // Paleta oficial del brandbook (Pantarotto Lértora).
        // Sólo 3 tonos maestros + escalas derivadas para estados.
        // ═══════════════════════════════════════════════════════════

        // Midnight Slate — primario. Navy con undertone violeta,
        // representa gravitas, profundidad intelectual y legado.
        slate: {
          50:  '#eef0f4',
          100: '#d8dce4',
          200: '#b5bcca',
          300: '#8b94a7',
          400: '#5f6a82',
          500: '#3d4863',
          600: '#2e3750',
          700: '#242b42',    // color primario oficial
          800: '#1a2033',
          900: '#121624',
          950: '#0a0d17',
        },

        // Ice Grey — base. Fondo frío de alta gama que reemplaza al
        // blanco puro, con pigmento azul sutil.
        ice: {
          50:  '#ffffff',
          100: '#fafafe',
          200: '#f3f3fa',
          300: '#e9e9f2',    // base oficial
          400: '#d8d9e5',
          500: '#bfc1d1',
          600: '#a0a2b6',
        },

        // Muted Bronze — acento. Calidez artesanal sin ostentación.
        // Se usa con moderación para CTAs y marcas refinadas.
        bronze: {
          50:  '#f7f2ea',
          100: '#ede3d2',
          200: '#dac6a8',
          300: '#c5a77f',
          400: '#a99064',
          500: '#8c7853',    // acento oficial
          600: '#6f5f42',
          700: '#554834',
          800: '#3a3124',
          900: '#201b13',
        },

        // Aliases legacy para no romper clases Tailwind aún presentes
        // en el markup (se pueden ir migrando gradualmente).
        legal:  { 50: '#eef0f4', 100: '#d8dce4', 200: '#b5bcca', 300: '#8b94a7', 400: '#5f6a82', 500: '#3d4863', 600: '#2e3750', 700: '#242b42', 800: '#1a2033', 900: '#121624', 950: '#0a0d17' },
        ledger: { 50: '#f7f2ea', 100: '#ede3d2', 200: '#dac6a8', 300: '#c5a77f', 400: '#a99064', 500: '#8c7853', 600: '#6f5f42', 700: '#554834', 800: '#3a3124', 900: '#201b13', 950: '#15100a' },
        paper:     '#e9e9f2',
        paperDark: '#d8d9e5',
        ink: {
          50:  '#fafafe',
          100: '#f3f3fa',
          200: '#e9e9f2',
          300: '#bfc1d1',
          400: '#8b94a7',
          500: '#5f6a82',
          600: '#3d4863',
          700: '#242b42',
          800: '#1a2033',
          900: '#0a0d17',
        },
      },
      fontFamily: {
        // Tipografía oficial del brandbook.
        // Montserrat (primary) · Lora (secondary) — ambas OFL desde Google Fonts.
        sans:  ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        mono:  ['"PT Sans"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'tick': ['0.72rem', { lineHeight: '1', letterSpacing: '0.18em' }],
        'monument': ['clamp(2rem, 5.5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'cover':    ['clamp(1.5rem, 3.8vw, 2.6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'editorial':['clamp(1.3rem, 2.2vw, 1.9rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
      },
      letterSpacing: {
        tick: '0.22em',
        ribbon: '0.32em',
      },
      maxWidth: {
        column: '62ch',
        shell: '1280px',
        reader: '780px',
      },
      spacing: {
        'chapter': '9rem',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.2, 0.6, 0.2, 1)',
      },
      animation: {
        'scroll-hint': 'scrollHint 2.2s ease-in-out infinite',
        'ribbon':      'ribbon 45s linear infinite',
        'reveal-line': 'revealLine 1s cubic-bezier(0.2, 0.6, 0.2, 1) both',
      },
      keyframes: {
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%':      { transform: 'translateY(6px)', opacity: '1' },
        },
        ribbon: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        revealLine: {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};

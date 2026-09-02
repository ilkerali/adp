/* ============================================================
   ADP — Association for Digital Progress (ADP · KODEX)
   Tailwind theme. Edit colours / fonts here — every page uses it.
   ============================================================ */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        /* ---- Dark navy: header, hero, footer, dark cards, body text ---- */
        ink: {
          DEFAULT: '#0B1B33',
          900: '#061224',   // footer, top strip
          800: '#0B1B33',
          700: '#12294A',
          600: '#1D4477',   // hover state of dark buttons
        },
        /* ---- Neutrals ---- */
        paper: '#EDF1F7',   // page background
        mist:  '#D5DEEA',   // all borders, rules, dividers
        card:  '#FFFFFF',   // card surfaces

        /* ---- Primary accent: corporate blue ----
           DEFAULT = filled buttons, logo mark, bullets (always with white text)
           light   = accent TEXT on dark navy backgrounds
           dark    = accent TEXT on white / paper backgrounds
           soft    = tinted backgrounds (icon tiles, note boxes)              */
        brand: {
          DEFAULT: '#1F5FD1',
          light:   '#8CB6F5',
          dark:    '#16408F',
          soft:    '#E4ECFB',
        },

        /* ---- Secondary accent: petrol, used sparingly for status ---- */
        accent: {
          DEFAULT: '#0E7C8A',
          dark:    '#0A5C67',
          soft:    '#DEF0F3',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Georgia', 'serif'],
        sans: ['"Public Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { content: '1200px', prose: '68ch' },
      letterSpacing: { tightest: '-0.045em' },
      boxShadow: {
        card: '0 1px 2px rgba(10,18,38,.04), 0 12px 32px -20px rgba(10,18,38,.35)',
        lift: '0 2px 4px rgba(10,18,38,.05), 0 28px 48px -28px rgba(10,18,38,.45)',
      },
      keyframes: {
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: { '0%': { transform: 'scaleX(0)' }, '100%': { transform: 'scaleX(1)' } },
      },
      animation: {
        riseIn: 'riseIn .7s cubic-bezier(.2,.7,.3,1) both',
        drawLine: 'drawLine 1s cubic-bezier(.2,.7,.3,1) both',
      },
    },
  },
};

/* ============================================================
   ADP — Association for Digital Progress (ADP · KODEX)
   Tailwind theme. Edit colours / fonts here — every page uses it.
   ============================================================ */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A1226',
          900: '#060B18',
          800: '#0A1226',
          700: '#131E3A',
          600: '#22304F',
        },
        paper: '#EEF1F5',
        mist: '#DDE3EC',
        card: '#FFFFFF',
        amber: { DEFAULT: '#E7A83A', dark: '#B4791B', soft: '#FBF0DA' },
        teal: { DEFAULT: '#1E7F73', dark: '#14655B', soft: '#E1F0ED' },
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

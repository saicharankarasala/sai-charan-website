/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brand design tokens
        brand: {
          bg:     '#030712',
          blue:   '#3b82f6',
          purple: '#8b5cf6',
          cyan:   '#06b6d4',
          text:   '#f8fafc',
          muted:  '#94a3b8',
        },
        // Keep existing scales for Blog/Journey backward compat
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      backgroundImage: {
        'dot-grid':      'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
        'dot-grid-light':'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
        'blue-purple':   'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'blue-cyan':     'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
        'shimmer-sweep': 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 60%)',
      },
      backgroundSize: {
        'dot-grid':    '20px 20px',
        'dot-grid-sm': '16px 16px',
      },
      scale: {
        '130': '1.3',
      },
      spacing: {
        '18': '4.5rem',
      },
      fontSize: {
        '60': '60%',
      },
      transitionDuration: {
        '400': '400ms',
      },
      boxShadow: {
        'neon':       '0 0 25px var(--main-color)',
        'neon-lg':    '0 0 50px var(--main-color)',
        'neon-xl':    '0 0 100px var(--main-color)',
        'glow-blue':  '0 0 20px rgba(59,130,246,0.4)',
        'glow-purple':'0 0 20px rgba(139,92,246,0.4)',
        'glow-cyan':  '0 0 20px rgba(6,182,212,0.3)',
        'glass':      'inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 32px rgba(0,0,0,0.4)',
      },
      keyframes: {
        // Legacy keyframes (keep)
        spotlight: {
          "0%":   { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%,-40%) scale(1)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to:   { backgroundPosition: "-200% 0" },
        },
        moveHorizontal: {
          "0%":   { transform: "translateX(-50%) translateY(-10%)" },
          "50%":  { transform: "translateX(50%) translateY(10%)" },
          "100%": { transform: "translateX(-50%) translateY(-10%)" },
        },
        moveInCircle: {
          "0%":   { transform: "rotate(0deg)" },
          "50%":  { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moveVertical: {
          "0%":   { transform: "translateY(-50%)" },
          "50%":  { transform: "translateY(50%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        // New keyframes
        'float-orb': {
          '0%':   { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(30px, -20px) scale(1.1)' },
        },
        'float-orb-reverse': {
          '0%':   { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(-25px, 15px) scale(0.95)' },
        },
        'ring-spin': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(59,130,246,0.3)' },
          '50%':      { boxShadow: '0 0 35px rgba(59,130,246,0.7)' },
        },
        'timeline-pulse': {
          '0%, 100%': { transform: 'scale(1)',   opacity: '1' },
          '50%':      { transform: 'scale(1.5)', opacity: '0.6' },
        },
        'shimmer-slide': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'bounce-arrow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
        'curtain-left': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'curtain-right': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'letter-reveal': {
          '0%':   { clipPath: 'inset(0 100% 0 0)', opacity: '0' },
          '100%': { clipPath: 'inset(0 0% 0 0)',   opacity: '1' },
        },
      },
      animation: {
        // Legacy
        spotlight:    'spotlight 2s ease .75s 1 forwards',
        shimmer:      'shimmer 2s linear infinite',
        first:        'moveVertical 30s ease infinite',
        second:       'moveInCircle 20s reverse infinite',
        third:        'moveInCircle 40s linear infinite',
        fourth:       'moveHorizontal 40s ease infinite',
        fifth:        'moveInCircle 20s ease infinite',
        // New
        'float-orb':         'float-orb 8s ease-in-out infinite alternate',
        'float-orb-reverse': 'float-orb-reverse 10s ease-in-out infinite alternate',
        'ring-spin':         'ring-spin 4s linear infinite',
        'float':             'float 6s ease-in-out infinite',
        'pulse-glow':        'pulse-glow 3s ease-in-out infinite',
        'timeline-pulse':    'timeline-pulse 2s ease-in-out infinite',
        'shimmer-slide':     'shimmer-slide 3s linear infinite',
        'bounce-arrow':      'bounce-arrow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

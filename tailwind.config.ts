import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        navy: {
          50:  '#e8edf2',
          100: '#c5d0dc',
          200: '#9fb0c4',
          300: '#7890ac',
          400: '#5a7899',
          500: '#3c6086',
          600: '#2d506f',
          700: '#1f3d57',
          800: '#1a3a5a',
          900: '#0d2035',
        },
        crimson: {
          400: '#e74c3c',
          500: '#c0392b',
          600: '#a93226',
        },
        gold: {
          300: '#f4d03f',
          400: '#d4ac0d',
          500: '#c9a227',
          600: '#a88320',
        },
      },
      container: {
        center: true,
        padding: { DEFAULT: '1.25rem', md: '2rem', lg: '2.5rem' },
        screens: { xl: '1200px' },
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, rgba(26,58,90,0.95) 0%, rgba(13,32,53,0.98) 100%)",
        'section-pattern': "radial-gradient(ellipse at 20% 50%, rgba(26,58,90,0.06) 0%, transparent 60%)",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        panvallight: {
          primary: '#1a3a5a',
          'primary-content': '#ffffff',
          secondary: '#c0392b',
          'secondary-content': '#ffffff',
          accent: '#c9a227',
          'accent-content': '#ffffff',
          neutral: '#1a3a5a',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f4f7f9',
          'base-300': '#e8edf2',
          'base-content': '#1a2535',
          info: '#4682b4',
          success: '#2ecc71',
          warning: '#f39c12',
          error: '#e74c3c',
        },
      },
      {
        panvaldark: {
          primary: '#4682b4',
          'primary-content': '#ffffff',
          secondary: '#e74c3c',
          'secondary-content': '#ffffff',
          accent: '#d4ac0d',
          'accent-content': '#1a2535',
          neutral: '#0d2035',
          'neutral-content': '#e8edf2',
          'base-100': '#0f1923',
          'base-200': '#162030',
          'base-300': '#1a2a3a',
          'base-content': '#e8edf2',
          info: '#5a9fd4',
          success: '#27ae60',
          warning: '#e67e22',
          error: '#c0392b',
        },
      },
    ],
    darkTheme: 'panvaldark',
    base: true,
    styled: true,
    utils: true,
  },
}

export default config

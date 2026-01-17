import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'background-alt': 'var(--background-alt)',
        'background-secondary': 'var(--background-secondary)',
        'background-elevated': 'var(--background-elevated)',
        foreground: 'var(--foreground)',
        'foreground-secondary': 'var(--foreground-secondary)',
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          light: 'var(--primary-light)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-muted': 'var(--text-muted)',
        border: 'var(--border-color)',
        'section-bg': 'var(--section-bg)',
        'section-bg-alt': 'var(--section-bg-alt)',
        'card-bg': 'var(--card-bg)',
        'input-bg': 'var(--input-bg)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(5rem, 12vw, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '300' }],
        'hero': ['clamp(3.5rem, 8vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '400' }],
        'h1': ['clamp(2.5rem, 5vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '500' }],
        'h2': ['clamp(2rem, 4vw, 2.25rem)', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '500' }],
        'h3': ['clamp(1.5rem, 3vw, 1.75rem)', { lineHeight: '1.3', fontWeight: '500' }],
        'lead': ['clamp(1.25rem, 2vw, 1.375rem)', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'tiny': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        '3xs': '0.125rem',
        '2xs': '0.25rem',
        'xs': '0.5rem',
        'sm': '0.75rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
        '5xl': '8rem',
        '6xl': '12rem',
        'section': 'clamp(5rem, 10vw, 10rem)',
        'section-mobile': 'clamp(4rem, 8vw, 6rem)',
      },
      boxShadow: {
        'premium-sm': '0 1px 3px var(--shadow-sm), 0 4px 16px var(--shadow-md)',
        'premium-md': '0 4px 16px var(--shadow-md), 0 8px 32px var(--shadow-lg)',
        'premium-lg': '0 8px 32px var(--shadow-lg), 0 16px 64px var(--shadow-hover)',
        'glow-primary': '0 0 20px var(--glow-primary)',
        'glow-accent': '0 0 20px var(--glow-accent)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.33, 1, 0.68, 1)',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.33, 1, 0.68, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      transitionTimingFunction: {
        'ease-out-cubic': 'cubic-bezier(0.33, 1, 0.68, 1)',
        'ease-in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
    },
  },
  plugins: [],
}
export default config

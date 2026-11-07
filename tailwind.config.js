/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '300px',
        'xs': '360px',
        '3xl': '1920px',
      },
      colors: {
        // Exact Kreeda App Brand Tokens (from kreeda/lib/core/theme/app_colors.dart)
        kreeda: {
          orange: '#FF5500',        // Energy Vermilion
          'orange-light': '#FF661A',
          navy: '#0A1128',          // Stadium Navy
          'live-red': '#EF4444',    // ((•)) LIVE badge
          'pitch-green': '#10B981', // Turf Emerald Green
          'pass-gold': '#F59E0B',   // Kreeda Pass Gold
          'pass-gold-light': '#FBBF24',
          // Light Mode Tokens (Sports Ice Canvas)
          'bg-light': '#F8F9FC',
          'surface-light': '#FFFFFF',
          'surface-elevated-light': '#F1F4F9',
          'text-primary-light': '#0F172A',
          'text-secondary-light': '#475569',
          'text-muted-light': '#94A3B8',
          'active-pill-light': '#FFF2EC',
          // Dark Mode Tokens (Deep Stadium Midnight)
          'bg-dark': '#0A0F1D',
          'surface-dark': '#131B2E',
          'surface-elevated-dark': '#1A243D',
          'text-primary-dark': '#FFFFFF',
          'text-secondary-dark': '#CBD5E1',
          'text-muted-dark': '#64748B',
          'active-pill-dark': '#2E1911',
        },
        // Semantic Theme-Adaptive Tokens mapped via CSS variables
        app: {
          bg: 'var(--kreeda-bg)',
          surface: 'var(--kreeda-surface)',
          'surface-elevated': 'var(--kreeda-surface-elevated)',
          'surface-glass': 'var(--kreeda-card-bg)',
          border: 'var(--kreeda-border)',
          'border-subtle': 'var(--kreeda-border-subtle)',
          'text-primary': 'var(--kreeda-text-primary)',
          'text-secondary': 'var(--kreeda-text-secondary)',
          'text-muted': 'var(--kreeda-text-muted)',
          'active-pill': 'var(--kreeda-active-pill)',
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Bebas Neue"', '"Cabinet Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'orange-glow': '0 0 25px -4px rgba(255, 85, 0, 0.40)',
        'gold-glow': '0 0 25px -4px rgba(245, 158, 11, 0.35)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
        'tactile': '0 4px 16px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      }
    },
  },
  plugins: [],
}

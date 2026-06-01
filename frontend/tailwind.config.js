/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        // Classic light palette
        'paper': {
          light: '#FFF8F0',
          warm: '#F5EFE7',
          antique: '#FAF5EE',
          parchment: '#F0E8DC',
        },
        // Accent colors
        'saffron': '#E8861A',
        'gold': {
          DEFAULT: '#C9A961',
          dark: '#A68948',
        },
        'amber': '#D4A843',
        'crimson': '#9B2335',
        'burgundy': '#6B1F3A',
        // Text colors
        'text': {
          primary: '#2C2416',
          secondary: '#5A4E3D',
          muted: '#8A7A6A',
        },
        // Legacy dark colors (kept for compatibility)
        'deep': '#0A0705',
        'rich': '#120E0A',
        'surface': '#1C1510',
        'cream': '#F8F0E3',
        'muted': '#8A7A6A',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A961, #E8861A)',
        'classical': 'linear-gradient(135deg, #FFF8F0 0%, #F5EFE7 50%, #F0E8DC 100%)',
        'paper-texture': 'linear-gradient(135deg, rgba(255, 248, 240, 0.95) 0%, rgba(250, 245, 238, 0.95) 100%)',
        'ornate-light': 'radial-gradient(circle at center, rgba(201, 169, 97, 0.08) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

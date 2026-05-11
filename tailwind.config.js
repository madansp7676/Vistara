/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Jost', 'system-ui', 'sans-serif'],
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
      },
      colors: {
        forest: '#0c1410',
        'forest-mid': '#172218',
        'forest-light': '#243328',
        earth: '#2a1e14',
        'luxury-beige': '#e8dfd0',
        'luxury-gold': '#c9a96e',
        'luxury-gold-light': '#dfc28e',
        'luxury-mist': '#f4f0ea',
        charcoal: '#0a0d0c',
        fog: '#8a9488',
      },
      letterSpacing: {
        luxury: '0.35em',
        wide: '0.2em',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
}


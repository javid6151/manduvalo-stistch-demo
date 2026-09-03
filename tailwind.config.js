/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-ivory': '#faf8f2',
        'soft-cream': '#fffaf2',
        'brand-peach': '#fb923c',
        'light-peach': '#fdba74',
        'deep-orange': '#f97316',
        'warm-beige': '#eadcc8',
        'dark-brown': '#2d2119',
        'charcoal-brown': '#40342c',
        'muted-brown': '#76665a',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        display: ['"DM Serif Display"', 'Cormorant Garamond', 'serif'],
        syne: ['Syne', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'lux': '0 20px 40px -15px rgba(45, 33, 25, 0.08)',
        'lux-hover': '0 30px 60px -12px rgba(45, 33, 25, 0.15)',
        'glass': '0 8px 32px 0 rgba(45, 33, 25, 0.06)',
      },
    },
  },
  plugins: [],
}

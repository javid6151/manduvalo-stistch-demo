/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial Gallery Agency Palette
        'canvas': '#FAF8F5',
        'surface': '#FFFFFF',
        'surface-subtle': '#F3EFE8',
        'surface-elevated': '#FFFFFF',
        'text-primary': '#1A1715',
        'text-secondary': '#68625A',
        'text-muted': '#8E867D',
        'border-subtle': '#EAE5DC',
        'border-strong': '#D5CEBF',
        'accent-bronze': '#8A6738',
        'accent-forest': '#1B5E43',

        // Cohesive Legacy Token Compatibility
        'deep-walnut': '#FAF8F5',
        'dark-teak': '#1A1715',
        'warm-ivory': '#FAF8F5',
        'soft-cream': '#F3EFE8',
        'muted-sand': '#68625A',
        'antique-brass': '#8A6738',
        'burnished-copper': '#8A6738',
        'dark-brass': '#EAE5DC',
        'heritage-green': '#1B5E43',
        'heritage-green-border': '#237353',
        'brand-peach': '#8A6738',
        'light-peach': '#8A6738',
        'deep-orange': '#8A6738',
        'warm-beige': '#EAE5DC',
        'dark-brown': '#1A1715',
        'charcoal-brown': '#2A2420',
        'muted-brown': '#68625A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        sora: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        syne: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'lux': '0 4px 20px -2px rgba(26, 23, 21, 0.05)',
        'lux-hover': '0 16px 36px -4px rgba(26, 23, 21, 0.09)',
        'glass': '0 8px 30px 0 rgba(26, 23, 21, 0.04)',
      },
    },
  },
  plugins: [],
}

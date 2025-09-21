/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'netflix-bg': '#141414',
        'netflix-red': '#E50914',
        'netflix-text': '#FFFFFF',
        'netflix-text-secondary': '#e5e5e5',
      },
      fontFamily: {
        'heading': ['Bebas Neue', 'sans-serif'],
        'body': ['Inter', 'Roboto', 'sans-serif'],
      },
      transitionProperty: {
        'transform': 'transform',
      },
    },
  },
  plugins: [],
}
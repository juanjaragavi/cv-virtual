/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': ['"League Spartan"', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('./assets/fondo-hero-dark-1440.jpg')",
      },
    },
  },
  plugins: [],
}

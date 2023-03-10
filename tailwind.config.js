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
        'dark': "url('./assets/fondo-hero-dark-1440.jpg')",
        'light': "url('./assets/fondo-hero-light-1440.jpg')",
        'logodark': "url('./assets/logo-juan-jaramillo.png')",
        'logolight': "url('./assets/logo-juan-jaramillo-light.png')",
      },
    },
  },
  plugins: [],
}

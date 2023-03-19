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
        'dark': "url('https://juanjaramillo.s3.amazonaws.com/assets/fondo-hero-dark-1440.jpg')",
        'light': "url('https://juanjaramillo.s3.amazonaws.com/assets/fondo-hero-light-1440.jpg')",
        'logodark': "url('https://juanjaramillo.s3.amazonaws.com/assets/logo-juan-jaramillo.png')",
        'logolight': "url('https://juanjaramillo.s3.amazonaws.com/assets/logo-juan-jaramillo-light.png')",
        'fondomovillight': "url('https://juanjaramillo.s3.amazonaws.com/assets/fondo-hero-light-1440.jpg')",
      },
    },
  },
  plugins: [],
}

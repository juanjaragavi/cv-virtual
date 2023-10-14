/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "league-spartan": ['"League Spartan"', "sans-serif"],
      },
      backgroundImage: {
        dark: "url('https://media.juanjaramillo.tech/fondo-hero-dark-1440.webp')",
        light:
          "url('https://media.juanjaramillo.tech/fondo-hero-light-1440.webp')",
        logodark:
          "url('https://media.juanjaramillo.tech/logo-juan-jaramillo.webp')",
        logolight:
          "url('https://media.juanjaramillo.tech/logo-juan-jaramillo-light.webp')",
        fondomovillight:
          "url('https://media.juanjaramillo.tech/fondo-hero-light-1440.webp')",
      },
    },
  },
  plugins: [],
};

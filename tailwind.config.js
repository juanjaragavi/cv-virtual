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
        dark: "url('https://storage.googleapis.com/media.juanjaramillo.tech/fondo-hero-dark-1440.webp')",
        light:
          "url('https://storage.googleapis.com/media.juanjaramillo.tech/fondo-hero-light-1440.webp')",
        logodark:
          "url('https://storage.googleapis.com/media.juanjaramillo.tech/logo-juan-jaramillo.webp')",
        logolight:
          "url('https://storage.googleapis.com/media.juanjaramillo.tech/logo-juan-jaramillo-light.webp')",
        fondomovillight:
          "url('https://storage.googleapis.com/media.juanjaramillo.tech/fondo-hero-light-1440.webp')",
      },
    },
  },
  plugins: [],
};

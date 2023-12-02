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
        dark: "url('https://juan-jaramillo-ai-assets.s3.amazonaws.com/fondo-hero-dark-1440.webp')",
        light:
          "url('https://juan-jaramillo-ai-assets.s3.amazonaws.com/fondo-hero-light-1440.webp')",
        logodark:
          "url('https://juan-jaramillo-ai-assets.s3.amazonaws.com/logo-juan-jaramillo.webp')",
        logolight:
          "url('https://juan-jaramillo-ai-assets.s3.amazonaws.com/logo-juan-jaramillo-light.webp')",
        fondomovillight:
          "url('https://juan-jaramillo-ai-assets.s3.amazonaws.com/fondo-hero-light-1440.webp')",
      },
    },
  },
  plugins: [],
};

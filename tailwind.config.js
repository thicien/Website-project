const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src//*.{html,js}",
    "./src/sections/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit"],
      },
    },
  },
};

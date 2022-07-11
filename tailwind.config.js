/** @type {import('tailwindcss').Config} **/

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
        "3xl": "1920px",
      },
      fontFamily: {
        sans: ["GT Walsheim medium", ...defaultTheme.fontFamily.sans],
        "sans-regular": ["GT Walsheim", ...defaultTheme.fontFamily.sans],
        druk: ["Druk Wide", ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        "dark-overlay":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%,  rgba(0, 0, 0, 0.5) 100%)",
      },
    },
  },
  plugins: [],
};

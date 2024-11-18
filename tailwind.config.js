/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#2B3559",
        "blue-duck": "#33C4CB",
        "orange-frog": "#F76B00",
        "yellow-cat": "#F7BC03",
        "gray-ai": "#D2E3F3",
        gray: "#F5F9FC",
        white: "#FFFFFF",
      },
      fontFamily: {
        jura: ["Jura", "sans-serif"],
      },
      screens: {
        "xl":"1280px"
      },
    },
  },
  plugins: [],
};

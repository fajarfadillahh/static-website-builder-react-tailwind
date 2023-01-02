/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
      },
      colors: {
        blue: {
          600: "#006FF9",
        },
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};

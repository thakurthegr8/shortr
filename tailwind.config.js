/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2f6dc7",
        secondary: "#d5d5d5",
        general: "#05050a",
        dark_secondary:"#1e1d1d"
      },
    },
  },
  plugins: [],
}

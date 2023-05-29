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
        primary: "#5b14ff",
        secondary: "#d5d5d5",
        general: "#000000",
        dark_secondary:"#333"
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["rubik", "sans-serif"],
      },

      colors: {
        'dark-bg': "#12161c" 
      }
    },

    

  },
  plugins: [require("tailwindcss-animatecss")],
};

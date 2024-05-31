/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGrey: "#B3B3B3",
        headerBg:"#333333",
        borderCl:"#E6E6E6",
        customGreen:"#00B207",
        cartCl:"#2C742F",
      }
    },
  },
  plugins: [],
}

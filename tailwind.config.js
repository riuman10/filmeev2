/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        bungee : ['Bungee Hairline', ...defaultTheme.fontFamily.sans],
        cinzel : ['Cinzel Decorative', ...defaultTheme.fontFamily.sans],
        slab : ['Roboto Slab', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}

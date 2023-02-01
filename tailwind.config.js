/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      primary: "#EEE9E5",
    },
    fontFamily: {
      sans: ["Playfair Display", "serif"],
    },
    extend: {},
  },
  plugins: [],
}

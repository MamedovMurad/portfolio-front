/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {    colors: {
      dark:"rgba(30, 33, 38, 1)",
      primary:"rgba(31, 41, 55, 1)",
      "text-primary":"#f2f2f2"
    },},
  },
  plugins: [],
}
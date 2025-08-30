/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- add this line for global dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

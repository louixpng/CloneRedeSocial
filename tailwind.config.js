/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-l': '#533EA8',
        'cream-white': '#FCF9F0',
        'cream-st-white':'#FFF4D3'
      }
    },
  },
  plugins: [],
}
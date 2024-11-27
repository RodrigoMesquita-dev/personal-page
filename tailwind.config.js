/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      backgroundColor: {
        'app-bg': '#f3f4f6', // Define uma nova cor personalizada
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFADE',
        text: '#16160E',
      },
      fontFamily: {
        sans: ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Figtree', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#D9A744',
      },
    },
  },
  plugins: [],
};

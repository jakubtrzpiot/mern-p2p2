/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      sans: ['Figtree', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#D9A744',
        bg: '#222222',
      },
        backgroundImage: {
        "homeBackground": "url('assets/home-bg.png')",
      },
    },
  },
  plugins: [],
};


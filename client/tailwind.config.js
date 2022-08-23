/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      sans: ['Figtree', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: 'orange',
        bg: '#222222',
      },
      backgroundImage: {
        homeBrowser: "url('assets/home-bg.png')",
      },
    },
  },
  plugins: [],
};

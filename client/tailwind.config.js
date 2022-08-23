/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      sans: ['Figtree', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'orange',
        bg: '#000',
      },
      animation: {
        'bg-animation': 'AnimationName 3s ease-in-out infinite',
      },
      keyframes: {
        AnimationName: {
          '0%, 100%': { 'background-position': '28% 100%' },
          '50%': { 'background-position': '89% 0' },
        },
      },
    },
  },
  plugins: [],
};

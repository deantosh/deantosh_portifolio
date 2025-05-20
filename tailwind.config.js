/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      animation: {
        blinkRotate: 'blinkRotate 1.5s infinite',
      },
      keyframes: {
        blinkRotate: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.25) rotate(180deg)' },
        },
      },
    },
  },
  plugins: [],
};
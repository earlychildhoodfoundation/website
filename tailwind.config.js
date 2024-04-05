/** @type {import('tailwindcss').Config} */

const sansFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
];

module.exports = {
  content: ['./src/**/*.{html,njk,md,yaml,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: sansFontStack,
        display: ['Oswald', 'sans-serif'],
      },
      screens: {
        '3xl': '2000px', // Add this line to specify a breakpoint at 2000px
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

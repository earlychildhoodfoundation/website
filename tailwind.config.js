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
  content: ['./src/**/*.{html,njk,md,yaml,js,svg}'],
  theme: {
    extend: {
      fontFamily: {
        sans: sansFontStack,
        display: ['Oswald', 'sans-serif'],
      },
      backdropFilter: ['blur'],
      screens: {
        '3xl': '2000px', // Add this line to specify a breakpoint at 2000px
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

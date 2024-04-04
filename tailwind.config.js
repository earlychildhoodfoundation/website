/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,yaml,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Update this line with your desired font stack
      },
      screens: {
        "3xl": "2000px", // Add this line to specify a breakpoint at 2000px
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

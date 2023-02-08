/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        formBlue: '#1565D8',
        gray: '#8692A6',
        hoverFocus: '#F5F9FF',
        step: "#BDBDBD",
        label: "#696F79"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

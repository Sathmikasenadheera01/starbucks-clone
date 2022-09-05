/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary':'#1B3932',
        'secondary':'#D4EAE3',
        'starbuck-green':'#006241',
      },
      fontFamily: {
        main: "'Open Sans', sans-serif"
      },
    },
  },
  plugins: [],
}
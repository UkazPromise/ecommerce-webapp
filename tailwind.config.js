/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgColor: '#ECECEC',
        textColor: '#9E6236',
        textColor1: '#D19C75',
        textColor2: '#F6F6F6',
        cardColor: '#F6F6F6',
        cardColor1: '#959595',
        cardColor2: '#D19C75',
        footerColor: '#D19C75',
        footerColor1: '#F6F6F6',
        primaryColor: '#D19C75'
      },
      fontFamily: {
        kalam: ['Kalam', 'cursive'],
      },
    },
  },
  plugins: [],
}


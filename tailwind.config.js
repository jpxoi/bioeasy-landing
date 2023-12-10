/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      blue: colors.blue,
      green: colors.green,
      purple: colors.purple,
      pink: colors.pink,
      orange: colors.orange,
      lime: colors.lime,
      'teal': {
        100: '#c5fffc',
        200: '#9fffe9',
        300: '#4afef7',
        400: '#15ecea',
        500: '#00cfd0',
        600: '#00a5a8',
        700: '#008186',
        800: '#066469',
        900: '#0a5457',
        950: '#003035',
      }
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}


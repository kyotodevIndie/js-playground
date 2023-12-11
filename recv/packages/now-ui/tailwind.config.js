import { colors, boxShadow, fontFamily } from './src/themes'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  theme: {
    extend: {
      colors,
      boxShadow,
      fontFamily
    },
  },
  plugins: [],
}


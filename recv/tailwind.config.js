import { nowUiExtendedTheme } from 'now-ui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', 'node_modules/now-ui/dist/*.js'],
  theme: {
    extend: {
      nowUiExtendedTheme,
    },
  },
  plugins: [],
}

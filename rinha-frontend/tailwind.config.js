/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryError: 'rgba(191, 14, 14, 1)',
      },
    },
  },
  plugins: [],
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        soot: {
          100: '#2c2c2c',
          200: '#282828',
          300: '#242424',
          400: '#202020',
          500: '#1c1c1c',
          600: '#181818',
          700: '#141414',
          800: '#101010',
          900: '#0c0c0c',
          950: '#080808',
        },
      },
    },
  },
  plugins: [require('tailwindcss/nesting')],
}

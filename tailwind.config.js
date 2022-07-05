/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ashy: '#EBF0F0',
        twitterblue: '#1DA1F2',
        smoke: '#F7F9F9',
        carbon: '#536471'
      }
    }
  },
  plugins: []
}

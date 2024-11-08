/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Playfair Display', 'serif'],
        inter: ['Playfair Display', 'serif'],
      },
      colors: {
        'primary-green': '#FF5722',
      }
    },
  },
  plugins: [],
}

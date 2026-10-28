/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
      },
      colors: {
        blur: {
          50: '#f8f6fe',
          100: '#efeafd',
          200: '#d9cffb',
          300: '#b8a6f8',
          400: '#8f75f2',
          500: '#6440ee',
          600: '#512ae5',
          700: '#3f1ec7',
          800: '#2c1791',
          900: '#1a0d63',
          dark: '#17122e',
          text: '#3b3552',
          muted: '#7b7494',
          border: '#e6e0f6',
        }
      }
    },
  },
  plugins: [],
}

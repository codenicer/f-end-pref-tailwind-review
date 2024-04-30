module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'blue-zodiac': {
          DEFAULT: '#189aff',
          50: '#ecf9ff',
          100: '#d4efff',
          200: '#b3e5ff',
          300: '#7fd6ff',
          400: '#43bcff',
          500: '#189aff',
          600: '#0079ff',
          700: '#0060fb',
          800: '#034eca',
          900: '#0a459e',
          950: '#09214a',
        },
      },
      spacing: {
        13: '3.4rem',
      },
    },
  },
  files: {
    associations: { '*.css': 'tailwindcss' },
  },
  plugins: [],
}

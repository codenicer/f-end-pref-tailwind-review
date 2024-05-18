/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          0: { transform: 'rotate(-3deg)' },
          100: { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s infinite',
      },
    },
  },
  plugins: [],
}

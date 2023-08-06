/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '3.125%, 6.25%': { width: '1ch' },
          '9.375%, 12.5%': { width: '2ch' },
          '15.625%, 18.75%': { width: '3ch' },
          '21.875%, 25%': { width: '4ch' },
          '28.125%, 31.25%': { width: '5ch' },
          '34.375%, 37.5%': { width: '6ch' },
          '40.625%, 43.75%': { width: '7ch' },
          '46.875%, 50%': { width: '8ch' },
          '53.125%, 56.25%': { width: '9ch' },
          '59.375%, 62.5%': { width: '10ch' },
          '65.625%, 68.75%': { width: '11ch' },
          '71.875%, 75%': { width: '12ch' },
          '78.125%, 81.25%': { width: '13ch' },
          '84.375%, 87.5%': { width: '14ch' },
          '90.625%, 93.75%': { width: '15ch' },
          '96.875%': { width: '16ch' },
        },
      },
    },
  },
  plugins: [],
}

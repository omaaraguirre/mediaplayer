/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primary: '#FF003B',
        secondary: '#7F1D1D',
        light: '#FFFFFF',
        medium: '#B2B2B2',
        dark: '#000000'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      minHeight: {
        dscreen: '100dvh'
      }
    }
  },
  plugins: []
}

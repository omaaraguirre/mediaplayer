/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.jsx'],
  theme: {
    extend: {
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

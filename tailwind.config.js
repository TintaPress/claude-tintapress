module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1a1a2e',
        'navy-light': '#2d2d3f',
        'navy-dark': '#0f0f1f',
        gold: '#c9a84c',
        cream: '#f5f0e8',
        slate: '#3d3a4a',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

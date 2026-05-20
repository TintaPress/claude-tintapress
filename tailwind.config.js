/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:       '#1a1a2e',
        'navy-mid': '#252545',
        'navy-dim': '#1f1f38',
        cream:      '#f5f0e8',
        'cream-dk': '#ede8df',
        gold:       '#c9a84c',
        'gold-dk':  '#b8943e',
        'gold-lt':  '#e8c97a',
        'gold-bg':  '#fef9ee',
        slate:      '#3d3a4a',
        burg:       '#6b2737',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(28px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.65s ease-out both',
        'fade-in':    'fadeIn 0.55s ease-out both',
        'slide-right':'slideRight 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}

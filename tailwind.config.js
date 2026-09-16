/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF9F6',
          100: '#F5F3ED',
          200: '#EFECE2',
          300: '#E4DFD2',
          400: '#D5CDBE',
          500: '#C2B7A3',
        },
        sand: {
          DEFAULT: '#E5DFD3',
          light: '#ECE7DC',
          dark: '#D0C6B4',
        },
        bronze: {
          light: '#D4AF7A',
          DEFAULT: '#B89358',
          dark: '#8E6E3B',
          rich: '#9D7841',
        },
        charcoal: {
          DEFAULT: '#141413',
          light: '#242321',
          surface: '#1A1918',
          card: '#1F1D1B',
        },
      },
      fontFamily: {
        heading: ['"Outfit"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}

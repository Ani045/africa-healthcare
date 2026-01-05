/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a365d',
        'primary-dark': '#0f2540',
        'primary-light': '#2c5282',
        'accent': '#F5A623',
        'accent-dark': '#E09000',
        'accent-light': '#FFB84D',
        'cancer-orange': '#F5A623',
        'cancer-gold': '#FFB84D',
        'navy': '#1a365d',
        'navy-light': '#2c5282',
        'red-accent': '#C53030',
        'cream-white': '#ffffff',
        'warm-ivory': '#FFFAF0',
        'soft-beige': '#FFF8E7',
        'light-orange': '#FEF3E2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'warm': '0 10px 30px rgba(26, 54, 93, 0.1)',
        'accent': '0 6px 20px rgba(245, 166, 35, 0.3)',
      },
    },
  },
  plugins: [],
}
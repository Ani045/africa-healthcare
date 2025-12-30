/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-chocolate': '#154D92',
        'warm-brown': '#0e3a6e',
        'coffee-bean': '#4a6fa5',
        'caramel': '#6b8fc9',
        'cream-white': '#ffffff',
        'warm-ivory': '#f8fafc',
        'golden-honey': '#154D92',
        'deep-copper': '#0e3a6e',
        'soft-beige': '#f0f7ff',
        'artemis-bg': '#f8fafc',
        'artemis-dark': '#0a2d54',
        'artemis-gold': '#154D92',
        'artemis-cream': '#e8f4ff',
        'primary': '#154D92',
        'primary-dark': '#0e3a6e',
        'primary-light': '#2a6db8'
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
        'warm': '0 10px 30px rgba(60, 42, 33, 0.1)',
        'golden': '0 6px 20px rgba(218, 165, 32, 0.3)',
      },
    },
  },
  plugins: [],
}
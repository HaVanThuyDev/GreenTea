/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        brand: {
          primary: '#0f9d58',
          mid: '#34c759',
          light: '#a8e063',
          dark: '#0a7a42',
          cream: '#f5f5f0',
          gold: '#f5c842',
          goldLight: '#fde68a',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0f9d58 0%, #34c759 50%, #a8e063 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0a3d1f 0%, #0f9d58 40%, #34c759 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(15,157,88,0.1) 0%, rgba(168,224,99,0.05) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'leaf-spin': 'leafSpin 20s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'ripple': 'ripple 0.6s linear',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(5deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-3deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(-8deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        leafSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(52,199,89,0.4)' },
          '50%': { boxShadow: '0 0 35px rgba(52,199,89,0.8)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.1)',
        'card': '0 10px 40px rgba(15,157,88,0.15)',
        'card-hover': '0 20px 60px rgba(15,157,88,0.3)',
        'glow': '0 0 30px rgba(52,199,89,0.5)',
        'glow-sm': '0 0 15px rgba(52,199,89,0.3)',
      },
    },
  },
  plugins: [],
}

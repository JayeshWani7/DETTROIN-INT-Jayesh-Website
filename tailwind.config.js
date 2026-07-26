/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F2F8F5',
          100: '#E1EFE8',
          200: '#C2DFD1',
          300: '#94C7AE',
          400: '#5FA984',
          500: '#3A8962',
          600: '#286D4C',
          700: '#1D553B',
          800: '#0D3B28', // Primary Deep Emerald Green
          900: '#0A2E1F', // Darkest Forest
          950: '#051810',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FDFBF7', // Primary warm off-white
          200: '#F7F4EE', // Alternating section background
          300: '#F2ECE1',
          400: '#E6DCCB',
          500: '#D5C4A9',
        },
        gold: {
          300: '#E8CA72',
          400: '#DFB951',
          500: '#D4AF37', // Accent Muted Gold
          600: '#C5A059',
          700: '#9E7A2E',
        },
        sage: {
          50: '#F4F7F5',
          100: '#E4ECE7',
          200: '#C7D8CD',
          300: '#A3BDAC',
          400: '#759B81',
          500: '#4A7C59', // Supporting Sage
        },
        charcoal: {
          700: '#3A3D3A',
          800: '#2A2D2A',
          900: '#1A1D1A', // Primary Text
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Manrope"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(10, 46, 31, 0.07)',
        'editorial-hover': '0 30px 60px -20px rgba(10, 46, 31, 0.15)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};

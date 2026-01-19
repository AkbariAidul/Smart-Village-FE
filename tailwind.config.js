/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981', // Emerald
          600: '#059669',
          700: '#047857',
          900: '#064e3b',
        },
        dark: '#0f172a', // Slate 900
        surface: '#f8fafc', // Slate 50
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.05)',
        'glow': '0 0 20px rgba(16, 185, 129, 0.2)',
        'card': '0 2px 10px rgba(0,0,0,0.03)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
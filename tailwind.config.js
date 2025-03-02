
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellowkite: {
          primary: "#DBA111",     // Gold primary color
          secondary: "#B88A0E",   // Darker gold
          tertiary: "#C9940D",    // Medium gold
          accent: "#E4B426",      // Light gold
          dark: "#1A1A1A",        // Dark background
          darker: "#111111",      // Even darker background
          light: "#F9F3E3",       // Light cream/gold
          gray: "#8E9196"         // Neutral gray
        }
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}

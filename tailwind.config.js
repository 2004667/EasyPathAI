/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom': "url('/images/main_background.svg')",
        'mobile': "url('/images/mobile_main_background.svg')"
      },
       screens: {
        
       },
       width: {
        'prof-card': '28%',
      },
      keyframes: {
        'spin-pause': {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'ping-fixed': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%, 100%': { transform: 'scale(1.2)', opacity: '0' },
        },
      },
      animation: {
        'spin-pause': 'spin-pause 2.5s linear infinite',
        'ping-fixed': 'ping-fixed 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },

    },
  },
  plugins: [],
}



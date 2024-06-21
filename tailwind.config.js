/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom': "url('./src/assets/images/main_background.svg')",
        'mobile': "url('./src/assets/images/mobile_main_background.svg')"
      },
       screens: {
        
       }
    },
  },
  plugins: [],
}



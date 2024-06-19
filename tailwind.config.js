/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom': "url('./src/assets/images/baground.png')",
        'mobile': "url('./src/assets/images/Mobile_background.png')"
      },
       screens: {
        
       }
    },
  },
  plugins: [],
}



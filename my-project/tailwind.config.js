/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundColor:{
        'biguni':'#FB2E86'
      },
      textColor:{
        'primary':'#FB2E86'
      },

      fontFamily:{
        'lato':["Lato", "serif"],
        'josefin':["Josefin Sans", "serif"]

      },
    },
  },
  plugins: [],
}

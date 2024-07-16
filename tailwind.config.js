/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-purple":'rgba(128, 0, 128, 0.699)',
        "custom-gray":'rgb(49, 49, 49)'
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}


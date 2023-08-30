/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
      maxWidth: {
        'container': '1144px',
     },
     fontFamily: {
      pops: [ 'Poppins', 'sans-serif'],
     },
     backgroundImage: {
      'banner': "url('./src/assets/banner.png')",
     

    }
     
  }
},
  plugins: [],
}


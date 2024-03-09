/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Market': "url('../assets/Marketing.png')",
        'It': "url('../assets/IT.png')",
        'Customer': "url('../assets/Customer1.png')",
        'Social': "url('../assets/Socmed2.png')",
        'Laptop':  "url('../assets/Laptop1.png')",
        'BoutPic':  "url('../assets/Aboutpic.jpg')",
        'BoutPic2':  "url('../assets/Job.jpg')"
      }
    },
  },
  plugins: [],
}


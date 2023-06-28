/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {
      colors: {
        "white-50": "rgba(255, 255, 255, .5)"
      },
      height: {
        "home-height": "calc(100vh - 299px)",
        "content-height": "calc(100vh - 407px)",
        "content-2-height": "calc(100% - 108px)",


      },
      backgroundImage: {
        'home-image': 'url(/public/images/fondo1.jpg)',
        'login-image': 'url(/public/images/fondo4.png)'
      }
    },
  }, 
  plugins: [],
}


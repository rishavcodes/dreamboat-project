/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '410px', 'max': '450px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '550px', 'max': '760px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '900px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    extend: {

    }
  },
  plugins: [],
}


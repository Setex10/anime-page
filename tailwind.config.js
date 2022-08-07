/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'phone': '320px',
        'phone-L': '425px',
        'tablet': '768px',
        'laptop': '1024px',
        'max-tablet': {'max': '767px'},
        'Monitor4K': '2560px',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#A8A6A1",
      },
      backgroundImage: {
        'hero': "url('https://picsum.photos/1080/512')",
        'content': "url('https://picsum.photos/400')",
      }
    },
  },
  plugins: [],
}

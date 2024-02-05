/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: '#38383B',
        primary: "#A8A6A1",
        'dark-primary': "#999793",
      },
      backgroundImage: {
        'hero': "url('/assets/intellifuel-banner.jpg')",
        'content': "url('https://picsum.photos/400')",
      }
    },
  },
  plugins: [],
}

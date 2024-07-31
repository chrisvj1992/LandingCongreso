/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1F3453",
        secondaryColor: "#E7DFD5",
        tertiaryColor: "#C8F0FF",
        quaternaryColor: "#151F36"
      }
    },
  },
  plugins: [],
}
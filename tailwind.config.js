/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: "#00e5ff",
          500: "#00b4d8",
          950: "#061325",
        }
      }
    },
  },
  plugins: [],
}

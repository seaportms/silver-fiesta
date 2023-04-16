/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App/*.{js,jsx,ts,tsx}",
    "./src/keycloak-theme/login/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
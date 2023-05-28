/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-montserrat)"]
      },
      colors: {
        dark: "#1f2937",
        light: "#ecf0f3",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#36c197" // 54,193,151
      }
    },
  },
  plugins: [],
}





/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        mont: ["var(--font-montserrat)"]
      },
      colors: {
          primaryLight: "#ecf0f3",
          secondaryLight: "#fafafa",
          primaryText: "#4B5563", //75,85,99
          primaryHeading: "#374151", //55,65,81
          accent: "#B63E96", // 240,86,199
          primaryShadow: "#6B7280", // 107,114,128);

          dark: "#1f2937",
          secondaryDark: "#202b3a",
          primaryTextDark: "#9CA3AF", // 156,163,175
          primaryHeadingDark: "#ecf0f3",
          accentDark: "#36c197", // 54,193,151
          primaryShadowDark: "#000", 
      },  
    },
  },
  plugins: [],
}





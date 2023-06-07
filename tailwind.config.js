/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '390px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        mont: ["var(--font-montserrat)"]
      },
      colors: {
        dark: "#1f2937",
        light: "#ecf0f3",
        primaryText: "#4B5563", //75,85,99
        primaryTextDark: "#9CA3AF", // 156,163,175
        primaryHeading: "#374151", //55,65,81
        primaryHeadingDark: "#ecf0f3", 
        accent: "#B63E96", // 240,86,199
        accentDark: "#36c197", // 54,193,151
        primaryShadow: "#6B7280", // 107,114,128);
        primaryShadowDark: "#000",
      },
    },
  },
  plugins: [],
}





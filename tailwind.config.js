/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Include src directory
  ],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],  // Set Lato as the default sans font
      },
      colors: {
        paperLight: "#FFFFFF",
        paperDark: "#424242",
        primary: "#03ACF2",
        primaryLight: "#B3E5FC",
        primaryDark: "#00579b",
        secondary: "#4CAF50",
        secondaryLight: "#C8E6C9",
        secondaryDark: "#357A38",
        accent: "#E91E63",
        accentLight: "#F8BBD0",
        accentDark: "#ad1457",
        textPrimary: "#212121",
        textSecondary: "#757575",
        textDark: "#FFFFFF",
        defaultDark:"#303030",
        defaultWhite:"#FAFAFA",
      },
    },
  },
  plugins: [],
}

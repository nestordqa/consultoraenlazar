/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Noah: ['Noah Text', 'sans-serif'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': '1536px'
    },
    extend: {
      colors: {
        darkBlue: "#043959",
        blue: "#34668b",
        grey: "#bbcacf",
        yellow: "#ecbf48",
        darkYellow: "#8b7f53",
        dark: "#323232",
        white: "#ffffff",
      },
      backgroundImage: {
        // EXAMPLE
        // hero: "url('/img/hero/hero-bg.png')",
      },
    },
  },
  plugins: [],
};

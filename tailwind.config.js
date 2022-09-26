/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xlg: "1280px",
      "2xl": "1536px",
    },
    backgroundImage: {
      backgroundImage: (theme) => ({
        'hero': "url('./assets/images/heroImage2.jpg')"
      })
      // hero: "url('./components/assets/images/heroImage2.png')",
    },
    extend: {
      colors: {
       primary: "#ED353F",
       white: "#FFFFFF",
       black: "#000000",
       lightPink: "#FDF0F1",
       gold: "#FCB615"
      }
    },
  },
  plugins: [],
};

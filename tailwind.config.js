/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        warmRed: "#E63946", // A warm, vibrant red
        warmOrange: "#F4A261", // A soft, warm orange
        warmYellow: "#E9C46A", // A golden, warm yellow
        deepOrange: "#E76F51", // A deep, rich orange
        warmBrown: "#8D5524", // A warm, earthy brown
        softCream: "#FAF3DD", // A light, creamy off-white
        warmGray: "#A8A8A8", // A neutral, warm gray
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        page: "#FFF5E1", // A soft, warm background color
      }),
      borderColor: (theme) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.warmGray", "currentColor"),
      }),
      textColor: (theme) => theme("colors"),
      boxShadow: {
        warmGlow: "0 4px 6px rgba(244, 162, 97, 0.5)", // A soft, warm shadow
      },
    },
  },
  plugins: [],
};

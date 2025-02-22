/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C1C1C", // Fondo oscuro elegante
        textLight: "#F5F5F5", // Blanco cálido para contraste
        textMuted: "#EAE7DC", // Tono arena, más suave
        accent: "#D4A373", // Beige/dorado cálido
        secondary: "#8BAAAD", // Azul grisáceo costero
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Texto principal
        serif: ["Playfair Display", "serif"], // Títulos
      },
    },
  },
  plugins: [],
};

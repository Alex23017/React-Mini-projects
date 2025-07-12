/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "shadow-color-change": "shadowColorChange 4s infinite alternate",
        "text-color-change": "textColorChange 5s linear infinite",
      },
      keyframes: {
        shadowColorChange: {
          "10%, 100%": { "box-shadow": "0 0 10px rgba(144, 245, 255, 1)" },
          "50%": { "box-shadow": "0 0 20px rgba(216, 48, 73, 1)" },
        },
        textColorChange: {
          "0%, 100%": { color: "rgb(254, 250, 249)" },
          "25%": { color: "rgb(144, 245, 245)" },
          "50%": { color: "rgb(216, 48, 73)" },
          "75%": { color: "rgb(144, 245, 245)" },
          "100%": { color: "rgb(216, 48, 73)" },
        },
      },
    },
  },
  plugins: [],
};

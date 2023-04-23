/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "3px",
      },
      colors: {
        theme: {
          terminal: {
            DEFAULT: "#0F172A",
            border: "#334155",
          },
          dark: {
            DEFAULT: "#222831",
            100: {
              DEFAULT: "#393E46",
              transparent: "rgba(57, 62, 70, 0.5)",
            },
            200: "#EEEEEE",
          },
          gold: {
            DEFAULT: "#FFD369",
            transparent: "rgba(255, 211, 105, 0.5)",
          },
          green: {
            DEFAULT: "#69FFA5",
            transparent: "rgba(105, 255, 165, 0.5)",
          },
          red: {
            DEFAULT: "#FF6969",
            transparent: "rgba(255, 105, 105, 0.5)",
          },
          white: {
            DEFAULT: "#FFFFFF",
            transparent: "rgba(255, 255, 255, 0.5)",
          },
        },
      },
    },
  },
  plugins: [],
};

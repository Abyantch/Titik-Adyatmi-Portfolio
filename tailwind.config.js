/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  darkMode: "class",

  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",

        float: "floating 6s ease-in-out infinite",

        "float-slow": "floating 8s ease-in-out infinite",
      },

      keyframes: {
        floating: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "25%": {
            transform: "translateY(-4px)",
          },

          "50%": {
            transform: "translateY(-10px)",
          },

          "75%": {
            transform: "translateY(-4px)",
          },
        },
      },
    },
  },

  plugins: [],
};

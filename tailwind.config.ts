import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // PURPLE
      colors: {
        pri: "#FFFFFF",
        sec: "#DBB2E8",
        text: "#0d1216",
        accent: "#781FFF",
        action: "#9362e3",
      },
      animation: {
        wiggle: "wiggle 3s ease infinite alternate forwards",
      },
      keyframes: {
        wiggle: {
          "0%": {
            transform: "translate(0)",
          },

          "10%": {
            transform: "translate(-2px, -2px)",
          },

          "20%": {
            transform: "translate(2px, -2px)",
          },

          "30%": {
            transform: "translate(-2px, 2px)",
          },

          "40%": {
            transform: "translate(2px, 2px)",
          },

          "50%": {
            transform: "translate(-2px, -2px)",
          },

          "60%": {
            transform: "translate(2px, -2px)",
          },

          "70%": {
            transform: "translate(-2px, 2px)",
          },

          "80%": {
            transform: "translate(-2px, -2px)",
          },

          "90%": {
            transform: "translate(2px, -2px)",
          },

          "100%": {
            transform: "translate(0)",
          },
        },
      },
    },
  },
  plugins: [],
}
export default config

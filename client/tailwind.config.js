/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind"
import openVariant from "./plugins/openVariant"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [openVariant, flowbite.plugin()],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: [
    {
      mytheme: {
        primary: "#b3dd18",

        secondary: "#fc194e",

        accent: "#6ae851",

        neutral: "#222335",

        "base-100": "#F8FAFC",

        info: "#A7BFEC",

        success: "#197164",

        warning: "#F7AB5E",

        error: "#E7466C",
      },
    },
  ],
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};

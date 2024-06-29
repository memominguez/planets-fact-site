/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        antonio: ["var(--font-antonio)"],
        league_spartan: ["var(--font-league_spartan)"],
      },
      colors: {
        blackish: "#070724",
        darkgray: "#38384f",
        lightgray: "#838391",
        grayhover: "#d8d8d8",
        greenblue: "#419ebb",
        yellowish: "#eda249",
        violetlike: "#6f2ed6",
        orange1: "#d14c32",
        orange2: "#d83a34",
        orange3: "#cd5120",
        greenish: "#1ec2a4",
        blueish: "#2d68f0",
      },
    },
  },
  plugins: [],
};

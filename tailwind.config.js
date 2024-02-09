/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "900px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        bgLogin:
          'url("/Users/apple/Desktop/westride/final project/final-project-react/src/assets/image/bg-login.png")',
      },
      colors: {
        primary: "#5858FA",
        secondary: "#00D1FF",
        textOne: "#150AA1",
        textTwo: "#7B7B7B",
        textThree: "#595959",
        textFour: "#d3d3d3",
        textFive: "#a8a8a8",
        strokeOne: "#E4E4E4",
        strokeTwo: "#D9D9D9",
        fillOne: "#F1F1F1",
        fillTwo: "#C7C7F9",
        line: "#EEEEEE",
        line2: "#F2F2F2",
        hover1: "#A9A9A9",
        bgCover: "#F1F1FF",
      },
    },
  },
  plugins: [],
};

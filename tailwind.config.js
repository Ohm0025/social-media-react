/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
        strokeOne: "#E4E4E4",
        strokeTwo: "#D9D9D9",
        fillOne: "#F1F1F1",
        line: "#EEEEEE",
        line2: "#F2F2F2",
        hover1: "#A9A9A9",
      },
    },
  },
  plugins: [],
};

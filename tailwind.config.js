/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBackground: "#000",
        textColor1: "#f22232",
        textColorBackground1: "linear-gradient(90.07deg,#FC0000 4.26%,#FF9900 98.93%);",
        buttonBackground: "linear-gradient(90deg,#BD0000 0%,#E7A90A 100%);",
        buttonBackground2: "linear-gradient(90deg,#BD0000 0%,#FF00D6 100%);",
        color3: "#491D1D",
        color4: "#AF4F4F"
      },
      fontSize: {
        heading1: "50px",
        heading2: "40px",
        heading3: "30px",
        heading4: "22px",
        heading5: "20px",
        heading6: "18px",
        body1: "16px",
        body2: "15px",
        body3: "14px",

        body1: "13px",
        body2: "12px",



      }
    },
  },
  plugins: [],
}


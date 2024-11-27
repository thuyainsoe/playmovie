/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgcolor: "#141414",
        black2: "#1A1A1A",
        textgray2: "#BFBFBF",
        textgray: "#999",
        bgred: "#E50000",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        tradewinds: ["Trade Winds"],
      },
      maxWidth: {
        custom: '1600px', // ✅ max-w-custom
      },
    },
  },
  plugins: [],
};

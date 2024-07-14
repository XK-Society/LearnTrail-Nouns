/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        presstart: ['"Press Start 2P"', 'cursive'],
        play: ['Play', 'cursive'],
      },
    },
  },
  plugins: [],
};


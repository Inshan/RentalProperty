/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        change: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform : 'translateX(0)' },
        }
      },
        animation: {
          'change': 'change 1s normal forwards ease-in',
        }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};

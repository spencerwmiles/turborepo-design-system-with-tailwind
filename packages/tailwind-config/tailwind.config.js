/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`src/**/*.{js,ts,jsx,tsx}`, "../../packages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-rfs"), require("@tailwindcss/forms")],
};

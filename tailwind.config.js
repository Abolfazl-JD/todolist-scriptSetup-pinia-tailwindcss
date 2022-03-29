module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  variants: {
    extend: {
        display: ["group-hover"],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

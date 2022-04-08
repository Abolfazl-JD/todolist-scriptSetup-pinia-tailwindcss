module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  variants: {
      scrollbar: ['rounded'],
    extend: {
        display: ["group-hover"],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
],
}

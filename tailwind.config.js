module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    fontFamily: {
      mono: ['JetBrains Mono', 'Courier New', 'Courier'],
    },
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
}

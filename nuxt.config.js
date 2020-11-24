export default {
  server: {
    host: '0.0.0.0',
  },
  head: {
    title: 'Naser Mirzaei',
    titleTemplate: '%s | Naser Mirzaei',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
  },

  css: [{src: 'jetbrains-mono/css/jetbrains-mono.css', lang: 'css'}],

  buildModules: [
    ['@nuxt/typescript-build'],
    [
      '@nuxtjs/color-mode',
      {
        preference: 'system',
      },
    ],
    ['@nuxtjs/tailwindcss'],
  ],
}

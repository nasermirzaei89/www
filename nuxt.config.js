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

  buildModules: [['@nuxt/typescript-build']],
}

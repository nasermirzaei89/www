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
      {
        name: 'msapplication-TileColor',
        content: '#FFFFFF',
      },
      {
        name: 'msapplication-TileImage',
        content: '/mstile-144x144.png',
      },
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png'},
      {rel: 'icon', type: 'image/png', sizes: '160x160', href: '/favicon-160x160.png'},
      {rel: 'icon', type: 'image/png', sizes: '196x196', href: '/favicon-196x196.png'},
      {rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-touch-icon-57x57.png'},
      {rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-touch-icon-114x114.png'},
      {rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-touch-icon-72x72.png'},
      {rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-touch-icon-144x144.png'},
      {rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-touch-icon-60x60.png'},
      {rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon-120x120.png'},
      {rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-touch-icon-76x76.png'},
      {rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon-152x152.png'},
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

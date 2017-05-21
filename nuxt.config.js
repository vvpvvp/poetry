module.exports = {
  router: {
    mode: 'history',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },
  loading: '~components/loading.vue',
  css: [
    { src: 'static/css/main.less', lang: 'less' }
  ],
  build: {
    extractCSS: true
  },
  head: {
    titleTemplate: '%s - 诗词',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: '诗词', content: '诗词, 诗歌, 唐诗三百首' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  cache: {
    max: 1000,
    maxAge: 900000
  }
}
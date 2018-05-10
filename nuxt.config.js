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
  loading: 'components/loading.vue',
  css: [
    { src: 'static/css/main.less', lang: 'less' }
  ],
  plugins: [
    { src: 'src/js/ga.js', ssr: false }
  ],
  build: {
    extractCSS: true
  },
  head: {
    titleTemplate: '%s - 诗词',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: '诗词, 诗歌, 唐诗三百首' },
      { name: 'baidu-site-verification', content: '77da2MvryU' }
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
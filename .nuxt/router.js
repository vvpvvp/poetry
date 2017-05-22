'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _453123c0 = () => import('/Users/alicia/Documents/develop/poetry/pages/index.vue' /* webpackChunkName: "pages/index" */)

const _f0bf02b4 = () => import('/Users/alicia/Documents/develop/poetry/pages/404.vue' /* webpackChunkName: "pages/404" */)

const _79ef9655 = () => import('/Users/alicia/Documents/develop/poetry/pages/search/_id.vue' /* webpackChunkName: "pages/search-id" */)

const _7fe5bf38 = () => import('/Users/alicia/Documents/develop/poetry/pages/author/_id.vue' /* webpackChunkName: "pages/author-id" */)

const _1f7740ba = () => import('/Users/alicia/Documents/develop/poetry/pages/all/_id.vue' /* webpackChunkName: "pages/all-id" */)

const _515791cf = () => import('/Users/alicia/Documents/develop/poetry/pages/authorall/_id.vue' /* webpackChunkName: "pages/authorall-id" */)

const _d245153c = () => import('/Users/alicia/Documents/develop/poetry/pages/poetry/_id.vue' /* webpackChunkName: "pages/poetry-id" */)

const _6395d3b0 = () => import('/Users/alicia/Documents/develop/poetry/pages/_id.vue' /* webpackChunkName: "pages/id" */)



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior,
  routes: [
		{
			path: "/",
			component: _453123c0,
			name: "index"
		},
		{
			path: "/404",
			component: _f0bf02b4,
			name: "404"
		},
		{
			path: "/search/:id?",
			component: _79ef9655,
			name: "search-id"
		},
		{
			path: "/author/:id?",
			component: _7fe5bf38,
			name: "author-id"
		},
		{
			path: "/all/:id?",
			component: _1f7740ba,
			name: "all-id"
		},
		{
			path: "/authorall/:id?",
			component: _515791cf,
			name: "authorall-id"
		},
		{
			path: "/poetry/:id?",
			component: _d245153c,
			name: "poetry-id"
		},
		{
			path: "/:id",
			component: _6395d3b0,
			name: "id"
		},
		{
			path: "*",
			component: _f0bf02b4,
			name: "custom"
		}
  ]
})

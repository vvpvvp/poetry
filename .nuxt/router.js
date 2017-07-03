'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _69c8c3c1 = () => import('/Users/alicia/Documents/develop/me/poetry/pages/index.vue' /* webpackChunkName: "pages/index" */)

const _0c1baa32 = () => import('/Users/alicia/Documents/develop/me/poetry/pages/404.vue' /* webpackChunkName: "pages/404" */)

const _b65e6218 = () => import('/Users/alicia/Documents/develop/me/poetry/pages/search/_id.vue' /* webpackChunkName: "pages/search-id" */)

const _aa721052 = () => import('/Users/alicia/Documents/develop/me/poetry/pages/author/_id.vue' /* webpackChunkName: "pages/author-id" */)

const _7ca6e47b = () => import('/Users/alicia/Documents/develop/me/poetry/pages/all/_id.vue' /* webpackChunkName: "pages/all-id" */)

const _4893a0d0 = () => import('/Users/alicia/Documents/develop/me/poetry/pages/authorall/_id.vue' /* webpackChunkName: "pages/authorall-id" */)

const _7c82a3fe = () => import('/Users/alicia/Documents/develop/me/poetry/pages/poetry/_id.vue' /* webpackChunkName: "pages/poetry-id" */)

const _4086c269 = () => import('/Users/alicia/Documents/develop/me/poetry/pages/_id.vue' /* webpackChunkName: "pages/id" */)



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
			component: _69c8c3c1,
			name: "index"
		},
		{
			path: "/404",
			component: _0c1baa32,
			name: "404"
		},
		{
			path: "/search/:id?",
			component: _b65e6218,
			name: "search-id"
		},
		{
			path: "/author/:id?",
			component: _aa721052,
			name: "author-id"
		},
		{
			path: "/all/:id?",
			component: _7ca6e47b,
			name: "all-id"
		},
		{
			path: "/authorall/:id?",
			component: _4893a0d0,
			name: "authorall-id"
		},
		{
			path: "/poetry/:id?",
			component: _7c82a3fe,
			name: "poetry-id"
		},
		{
			path: "/:id",
			component: _4086c269,
			name: "id"
		},
		{
			path: "*",
			component: _0c1baa32,
			name: "custom"
		}
  ]
})

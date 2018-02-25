import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _73b89bfc = () => import('..\\pages\\pages\\index.vue' /* webpackChunkName: "pages_pages_index" */).then(m => m.default || m)
const _2ab5b652 = () => import('..\\pages\\posts\\_slug\\index.vue' /* webpackChunkName: "pages_posts__slug_index" */).then(m => m.default || m)
const _65adde88 = () => import('..\\pages\\pages\\_slug\\index.vue' /* webpackChunkName: "pages_pages__slug_index" */).then(m => m.default || m)
const _5f38d48e = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/pages",
			component: _73b89bfc,
			name: "pages"
		},
		{
			path: "/posts/:slug?",
			component: _2ab5b652,
			name: "posts-slug"
		},
		{
			path: "/pages/:slug",
			component: _65adde88,
			name: "pages-slug"
		},
		{
			path: "/",
			component: _5f38d48e,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}

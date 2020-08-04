import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3bcc42ae = () => interopDefault(import('../pages/coc.vue' /* webpackChunkName: "pages/coc" */))
const _73424157 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _22e76496 = () => interopDefault(import('../pages/events/index.vue' /* webpackChunkName: "pages/events/index" */))
const _3fa94bf6 = () => interopDefault(import('../pages/training/index.vue' /* webpackChunkName: "pages/training/index" */))
const _2f21083e = () => interopDefault(import('../pages/training/_id/index.vue' /* webpackChunkName: "pages/training/_id/index" */))
const _1e3cb8c9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/coc",
    component: _3bcc42ae,
    name: "coc"
  }, {
    path: "/contact",
    component: _73424157,
    name: "contact"
  }, {
    path: "/events",
    component: _22e76496,
    name: "events"
  }, {
    path: "/training",
    component: _3fa94bf6,
    name: "training"
  }, {
    path: "/training/:id",
    component: _2f21083e,
    name: "training-id"
  }, {
    path: "/",
    component: _1e3cb8c9,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

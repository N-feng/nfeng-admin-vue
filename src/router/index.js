import Vue from 'vue'
import Router from 'vue-router'
import Default from './modules/Default'
import System from './modules/System'
import Admin from './modules/Admin'

Vue.use(Router)

const mainRouter = [
  ...Admin,
  ...System,
  ...Default,
]

const routers = [...mainRouter]

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: routers,
})

router.beforeEach((to, from, next) => {
  next()
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Default from './modules/default'
import System from './modules/system'
import Admin from './modules/admin'

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

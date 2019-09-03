import Vue from 'vue'
import Router from 'vue-router'
import Web from './modules/Web'
import System from './modules/System'
import Admin from './modules/Admin'

Vue.use(Router)

const mainRouter = [
  {
    path: '/',
    redirect: '/web',
    meta: {
      title: '前台跳转',
    },
  },
  Web,
  Admin,
  ...System,
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

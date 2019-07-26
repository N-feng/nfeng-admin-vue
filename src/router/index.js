import Vue from 'vue'
import Router from 'vue-router'
import web from './modules/web'
import system from './modules/system'
import admin from './modules/admin'

Vue.use(Router)

const mainRouter = [
  {
    path: '/',
    redirect: '/web',
    meta: {
      title: '前台跳转',
    },
  },
  web,
  ...admin,
  ...system,
]

const routers = [
  ...mainRouter,
]

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: routers,
})

router.beforeEach((to, from, next) => {
  next()
})

export default router

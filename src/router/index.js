import Vue from 'vue'
import Router from 'vue-router'
import web from './modules/web'
import system from './modules/system'
import admin from './modules/admin'

Vue.use(Router)

const mainRouter = [
  web,
  // {
  //   path: '/web',
  //   name: 'Web',
  //   component: () => import('@/views/web/index.vue'),
  // },
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

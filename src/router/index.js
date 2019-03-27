import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routerMap = [
  {
    path: '/',
    name: 'Web',
    component: () => import('../views/web/index'),
    title: '欢迎页',
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import('../views/admin/main'),
    title: '后台',
    redirect: '/Admin/landing',
    children: [
      {
        path: 'landing',
        name: 'landing',
        component: () => import('../views/admin/landing'),
        title: '后台首页',
      },
    ],
  },
]

export function hasPath(path) {
  let bool = false
  routerMap.forEach((el) => {
    if (el.path === path) {
      bool = true
    }
  })
  return bool
}

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: routerMap,
})

router.beforeEach((to, from, next) => {
  next()
})

export default router

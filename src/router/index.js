import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/admin/main-box.vue'
import authList from '../views/admin/auth/list.vue'
import imgList from '../views/admin/img/list.vue'
import taskList from '../views/admin/task/list.vue'
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

const authRouter = {
  path: '/auth',
  name: 'auth',
  redirect: '/auth/list',
  component: main,
  children: [
    {
      path: '/auth/list',
      name: 'authList',
      title: '用户列表',
      component: authList,
    },
  ],
}

const imgRouter = {
  path: '/img',
  name: 'img',
  redirect: '/img/list',
  title: '图片管理',
  component: main,
  children: [
    {
      path: '/img/list',
      name: 'imgList',
      title: '图片列表',
      component: imgList,
    },
  ],
}

const taskRouter = {
  path: '/task',
  name: 'task',
  redirect: '/task/list',
  title: '任务管理',
  component: main,
  children: [
    {
      path: '/task/list',
      name: 'taskList',
      title: '任务列表',
      component: taskList,
    },
  ],
}

const routers = [
  authRouter,
  imgRouter,
  taskRouter,
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

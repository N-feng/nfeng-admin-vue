const Layout = () => import('@/components/Layout/admin.vue')

export const admin = {
  path: '/admin',
  name: 'admin',
  meta: {
    title: '后台管理',
  },
  redirect: '/admin/landing',
  component: Layout,
  children: [
    {
      path: '/admin/landing',
      name: 'landing',
      meta: {
        title: '后台欢迎页',
      },
      component: () => import('@/views/admin/landing/index.vue'),
    },
    {
      path: '/auth/list',
      name: 'authList',
      meta: {
        title: '用户管理',
      },
      component: () => import('@/views/admin/auth/list.vue'),
    },
    {
      path: '/role/list',
      name: 'roleList',
      meta: {
        title: '角色管理',
      },
      component: () => import('@/views/admin/role/list.vue'),
    },
  ],
}

const img = {
  path: '/img',
  name: 'img',
  meta: {
    title: '图片管理',
  },
  redirect: '/img/list',
  component: Layout,
  children: [
    {
      path: '/img/list',
      name: 'imgList',
      meta: {
        title: '图片列表',
      },
      component: () => import('@/views/admin/img/list.vue'),
    },
  ],
}

const task = {
  path: '/task',
  name: 'task',
  meta: {
    title: '任务管理',
  },
  redirect: '/task/list',
  component: Layout,
  children: [
    {
      path: '/task/list',
      name: 'taskList',
      meta: {
        title: '任务列表',
        rename: '/task',
      },
      component: () => import('@/views/admin/task/list.vue'),
    },
  ],
}

export default [admin, img, task]

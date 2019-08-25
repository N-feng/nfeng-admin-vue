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
    // {
    //   path: '/auth/list',
    //   name: 'authList',
    //   meta: {
    //     title: '用户管理',
    //   },
    //   component: () => import('@/views/admin/auth/list.vue'),
    // },
    {
      path: '/role/list',
      name: 'roleList',
      meta: {
        title: '角色管理',
      },
      component: () => import('@/views/admin/role/list_role.vue'),
    },
  ],
}

const other = {
  path: '/other',
  name: 'other',
  meta: {
    title: '拓展功能',
  },
  redirect: '/task/list',
  component: Layout,
  children: [
    {
      path: '/task/list',
      name: 'taskList',
      meta: {
        title: '任务管理',
      },
      component: () => import('@/views/admin/task/list.vue'),
    },
    // {
    //   path: '/img/list',
    //   name: 'imgList',
    //   meta: {
    //     title: '图片管理',
    //   },
    //   component: () => import('@/views/admin/img/list.vue'),
    // },
    {
      path: '/note/list',
      name: 'noteList',
      meta: {
        title: '笔记管理',
      },
      component: () => import('@/views/admin/note/list.vue'),
    },
    {
      path: '/note/create',
      name: 'noteCreate',
      meta: {
        rename: 'noteList',
        title: '笔记创建',
      },
      component: () => import('@/views/admin/note/create.vue'),
    },
  ],
}

export default [admin, other]

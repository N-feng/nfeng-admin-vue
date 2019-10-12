const Layout = () => import('@/components/Layout/admin.vue')
const NfRouterView = () => import('@/components/NfRouterView')

export const admin = {
  path: '/admin',
  name: 'admin',
  meta: {
    title: 'adminManager',
  },
  redirect: '/admin/index',
  component: Layout,
  children: [
    {
      path: '/admin/index',
      name: 'adminIndex',
      meta: {
        title: 'AdminIndex',
      },
      component: () => import('@/views/admin/index.vue'),
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
      path: '/admin/role',
      name: 'adminRole',
      meta: {
        title: 'RoleManager',
      },
      component: () => import('@/views/admin/role/list.vue'),
    },
    {
      path: '/expand/task',
      name: 'expandTask',
      meta: {
        title: 'TaskManager',
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
      path: 'note',
      name: 'NoteManager',
      meta: {
        title: 'NoteManager',
      },
      redirect: '/admin/note/list',
      component: NfRouterView,
      children: [
        {
          path: 'list',
          name: 'NoteManagerList',
          meta: {
            title: 'NoteManagerList',
            rename: 'NoteManager',
          },
          component: () => import('@/views/admin/note/list.vue'),
        },
        {
          path: 'create',
          name: 'NoteManagerCreate',
          meta: {
            title: 'NoteManagerCreate',
            rename: 'NoteManager',
          },
          component: () => import('@/views/admin/note/create.vue'),
        },
      ],
    },
  ],
}

export default admin

const Layout = () => import('@/components/Layout/admin.vue')
const NfRouterView = () => import('@/components/NfRouterView')

export const admin = {
  path: '/admin',
  name: 'admin',
  meta: {
    title: 'admin',
  },
  redirect: '/admin/system',
  component: Layout,
  children: [
    {
      path: 'system',
      name: 'AdminManager',
      meta: {
        title: 'AdminManager',
      },
      redirect: '/admin/system/Landing',
      component: NfRouterView,
      children: [
        {
          path: 'Landing',
          name: 'Landing',
          parentName: 'AdminManager',
          meta: {
            title: 'Landing',
          },
          component: () => import('@/views/admin/index.vue'),
        },
        {
          path: 'AuthManager',
          name: 'AuthManager',
          parentName: 'AdminManager',
          meta: {
            title: 'AuthManager',
          },
          component: () => import('@/views/admin/auth/list.vue'),
        },
        {
          path: 'RoleManager',
          name: 'RoleManager',
          parentName: 'AdminManager',
          meta: {
            title: 'RoleManager',
          },
          component: () => import('@/views/admin/role/list.vue'),
        },
        {
          path: 'TaskManager',
          name: 'TaskManager',
          parentName: 'AdminManager',
          meta: {
            title: 'TaskManager',
          },
          component: () => import('@/views/admin/task/list.vue'),
        },
        {
          path: 'NoteManagerList',
          name: 'NoteManagerList',
          parentName: 'AdminManager',
          meta: {
            title: 'NoteManagerList',
          },
          component: () => import('@/views/admin/note/list.vue'),
        },
        {
          path: 'NoteManagerCreate',
          name: 'NoteManagerCreate',
          parentName: 'AdminManager',
          meta: {
            title: 'NoteManagerCreate',
            rename: 'NoteManagerList',
          },
          component: () => import('@/views/admin/note/create.vue'),
        },
        {
          path: 'ImgManagerList',
          name: 'ImgManagerList',
          parentName: 'AdminManager',
          meta: {
            title: 'ImgManagerList',
          },
          component: () => import('@/views/admin/img/list.vue'),
        },
        {
          path: 'ProjectManagerList',
          name: 'ProjectManagerList',
          parentName: 'AdminManager',
          meta: {
            title: 'ProjectManagerList',
          },
          component: () => import('@/views/admin/project/list.vue'),
        },
        {
          path: 'ProjectManagerCreate',
          name: 'ProjectManagerCreate',
          parentName: 'AdminManager',
          meta: {
            title: 'ProjectManagerCreate',
            rename: 'ProjectManagerList',
          },
          component: () => import('@/views/admin/project/create.vue'),
        },
      ],
    },
    // {
    //   path: 'note',
    //   name: 'NoteManager',
    //   meta: {
    //     title: 'NoteManager',
    //   },
    //   redirect: '/admin/note/list',
    //   component: NfRouterView,
    //   children: [
    //   ],
    // },
    // {
    //   path: 'project',
    //   name: 'ProjectManager',
    //   meta: {
    //     title: 'ProjectManager',
    //   },
    //   redirect: '/admin/project/list',
    //   component: NfRouterView,
    //   children: [
    //   ],
    // },
  ],
}

export default admin

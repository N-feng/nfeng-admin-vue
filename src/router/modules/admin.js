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
      redirect: '/admin/system/landing',
      component: NfRouterView,
      children: [
        {
          path: 'landing',
          name: 'Landing',
          parentName: 'AdminManager',
          meta: {
            title: 'Landing',
          },
          component: () => import('@/views/admin/index.vue'),
        },
        {
          path: 'role',
          name: 'RoleManager',
          parentName: 'AdminManager',
          meta: {
            title: 'RoleManager',
          },
          component: () => import('@/views/admin/role/list.vue'),
        },
        {
          path: 'task',
          name: 'TaskManager',
          parentName: 'AdminManager',
          meta: {
            title: 'TaskManager',
          },
          component: () => import('@/views/admin/task/list.vue'),
        },
      ],
    },
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
          parentName: 'NoteManager',
          meta: {
            title: 'NoteManagerList',
          },
          component: () => import('@/views/admin/note/list.vue'),
        },
        {
          path: 'create',
          name: 'NoteManagerCreate',
          parentName: 'NoteManager',
          meta: {
            title: 'NoteManagerCreate',
            rename: 'NoteManagerList',
          },
          component: () => import('@/views/admin/note/create.vue'),
        },
      ],
    },
    {
      path: 'project',
      name: 'ProjectManager',
      meta: {
        title: 'ProjectManager',
      },
      redirect: '/admin/project/list',
      component: NfRouterView,
      children: [
        {
          path: 'list',
          name: 'ProjectManagerList',
          parentName: 'ProjectManager',
          meta: {
            title: 'ProjectManagerList',
          },
          component: () => import('@/views/admin/project/list.vue'),
        },
        {
          path: 'create',
          name: 'ProjectManagerCreate',
          parentName: 'ProjectManager',
          meta: {
            title: 'ProjectManagerCreate',
            rename: 'ProjectManagerList',
          },
          component: () => import('@/views/admin/project/create.vue'),
        },
      ],
    },
  ],
}

export default admin

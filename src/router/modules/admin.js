const Layout = () => import('../../views/admin/layout.vue')

export const admin = [{
  path: '/admin',
  name: 'admin',
  meta: {
    title: 'admin',
  },
  component: Layout,
  children: [
    {
      path: 'auth/list',
      name: '用户列表',
      component: () => import('../../views/admin/auth/list.vue'),
    },
    {
      path: 'auth/create',
      name: '创建用户',
      component: () => import('../../views/admin/auth/create.vue'),
    },
    {
      path: 'role/list',
      name: '角色列表',
      component: () => import('../../views/admin/role/list.vue'),
    },
    {
      path: 'role/create',
      name: '创建角色',
      component: () => import('../../views/admin/role/create.vue'),
    },
    {
      path: 'access/list',
      name: '权限列表',
      component: () => import('../../views/admin/access/list.vue'),
    },
    {
      path: 'access/create',
      name: '创建权限',
      component: () => import('../../views/admin/access/create.vue'),
    },
    {
      path: 'role-access/create',
      name: '授权',
      component: () => import('../../views/admin/role-access/create.vue'),
    },
    {
      path: 'TaskManager',
      name: 'TaskManager',
      meta: {
        title: 'TaskManager',
      },
      component: () => import('../../views/admin/task/list.vue'),
    },
    {
      path: 'ImgManager',
      name: 'ImgManager',
      meta: {
        title: 'ImgManager',
      },
      component: () => import('../../views/admin/img/list.vue'),
    },
    {
      path: 'NoteManager',
      name: 'NoteManager',
      meta: {
        title: 'NoteManager',
      },
      component: () => import('../../views/admin/note/list.vue'),
      children: [
        // {
        //   path: 'NoteManagerCreate',
        //   name: 'NoteManagerCreate',
        //   meta: {
        //     title: 'NoteManagerCreate',
        //     rename: 'NoteManager'
        //   },
        //   component: () => import('../../views/admin/note/create.vue')
        // },
        {
          path: 'NoteManagerPreview',
          name: 'NoteManagerPreview',
          meta: {
            title: 'NoteManagerPreview',
            rename: 'NoteManager',
          },
          component: () => import('../../views/admin/note/preview.vue'),
        },
      ],
    },
    {
      path: 'NoteManagerCreate',
      name: 'NoteManagerCreate',
      meta: {
        title: 'NoteManagerCreate',
        rename: 'NoteManager',
      },
      component: () => import('../../views/admin/note/create.vue'),
    },
    {
      path: 'ProjectManager',
      name: 'ProjectManager',
      meta: {
        title: 'ProjectManager',
      },
      component: () => import('../../views/admin/project/list.vue'),
    },
    {
      path: 'ProjectManagerCreate',
      name: 'ProjectManagerCreate',
      meta: {
        title: 'ProjectManagerCreate',
        rename: 'ProjectManager',
      },
      component: () => import('../../views/admin/project/create.vue'),
    },
    {
      path: 'ProjectManagerPreview',
      name: 'ProjectManagerPreview',
      meta: {
        title: 'ProjectManagerPreview',
        rename: 'ProjectManager',
      },
      component: () => import('../../views/admin/project/preview.vue'),
    },
    // {
    //   path: 'system',
    //   name: 'AdminManager',
    //   meta: {
    //     title: 'AdminManager',
    //   },
    //   redirect: '/admin/system/Landing',
    //   component: nfRouterView,
    //   children: [
    //   ],
    // },
  ],
}, {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录',
  },
  component: () => import('../../views/admin/auth/login.vue'),
}]

export default admin

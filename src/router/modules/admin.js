const Layout = () => import('../../components/Layout/admin.vue')
// const nfRouterView = () => import('../../components/nfRouterView')

export const admin = {
  path: '/admin',
  name: 'admin',
  meta: {
    title: 'admin'
  },
  redirect: '/admin/Landing',
  component: Layout,
  children: [
    {
      path: 'Landing',
      name: 'Landing',
      meta: {
        title: 'Landing'
      },
      component: () => import('../../views/admin/index.vue')
    },
    {
      path: 'AuthManager',
      name: 'AuthManager',
      meta: {
        title: 'AuthManager'
      },
      component: () => import('../../views/admin/auth/list.vue')
    },
    {
      path: 'RoleManager',
      name: 'RoleManager',
      meta: {
        title: 'RoleManager'
      },
      component: () => import('../../views/admin/role/list.vue')
    },
    {
      path: 'TaskManager',
      name: 'TaskManager',
      meta: {
        title: 'TaskManager'
      },
      component: () => import('../../views/admin/task/list.vue')
    },
    {
      path: 'ImgManager',
      name: 'ImgManager',
      meta: {
        title: 'ImgManager'
      },
      component: () => import('../../views/admin/img/list.vue')
    },
    {
      path: 'NoteManager',
      name: 'NoteManager',
      meta: {
        title: 'NoteManager'
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
            rename: 'NoteManager'
          },
          component: () => import('../../views/admin/note/preview.vue')
        }
      ]
    },
    {
      path: 'NoteManagerCreate',
      name: 'NoteManagerCreate',
      meta: {
        title: 'NoteManagerCreate',
        rename: 'NoteManager'
      },
      component: () => import('../../views/admin/note/create.vue')
    },
    {
      path: 'ProjectManager',
      name: 'ProjectManager',
      meta: {
        title: 'ProjectManager'
      },
      component: () => import('../../views/admin/project/list.vue')
    },
    {
      path: 'ProjectManagerCreate',
      name: 'ProjectManagerCreate',
      meta: {
        title: 'ProjectManagerCreate',
        rename: 'ProjectManager'
      },
      component: () => import('../../views/admin/project/create.vue')
    },
    {
      path: 'ProjectManagerPreview',
      name: 'ProjectManagerPreview',
      meta: {
        title: 'ProjectManagerPreview',
        rename: 'ProjectManager'
      },
      component: () => import('../../views/admin/project/preview.vue')
    }
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
  ]
}

export default admin

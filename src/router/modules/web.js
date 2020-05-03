const Layout = () => import('../../views/default/layout.vue')

const web = {
  path: '/',
  name: 'web',
  meta: {
    title: 'The front desk'
  },
  component: Layout,
  // redirect: '/web/index',
  children: [
    {
      path: '/index',
      name: 'webIndex',
      meta: {
        title: 'Landing'
      },
      component: () => import('../../views/default/index.vue')
    }
    // {
    //   path: 'note',
    //   name: 'webNote',
    //   meta: {
    //     title: 'Note'
    //   },
    //   component: () => import('../../views/default/note/list.vue')
    // },
    // {
    //   path: 'notePreview',
    //   name: 'webNotePreview',
    //   meta: {
    //     rename: 'webNote'
    //   },
    //   component: () => import('../../views/default/note/preview.vue')
    // },
    // {
    //   path: 'project',
    //   name: 'webProject',
    //   meta: {
    //     title: 'Project'
    //   },
    //   component: () => import('../../views/default/project/list.vue')
    // }
  ]
}

export default web

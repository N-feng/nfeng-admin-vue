const Layout = () => import('@/components/Layout/web.vue')

const web = {
  path: '/web',
  name: 'web',
  meta: {
    title: 'The front desk',
  },
  component: Layout,
  redirect: '/web/index',
  children: [
    {
      path: 'index',
      name: 'webIndex',
      meta: {
        title: 'Landing',
      },
      component: () => import('@/views/web/index.vue'),
    },
    {
      path: 'note',
      name: 'webNote',
      meta: {
        title: 'Note',
      },
      component: () => import('@/views/web/note/list.vue'),
    },
    {
      path: 'notePreview',
      name: 'webNotePreview',
      meta: {
        rename: 'webNote',
      },
      component: () => import('@/views/web/note/preview.vue'),
    },
    {
      path: 'project',
      name: 'webProject',
      meta: {
        title: 'Project',
      },
      component: () => import('@/views/web/project/list.vue'),
    },
  ],
}

export default web

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
        title: 'Notes',
      },
      component: () => import('@/views/web/note/index.vue'),
    },
    {
      path: 'notePreview',
      name: 'webNotePreview',
      meta: {
        rename: 'webNote',
      },
      component: () => import('@/views/web/note/preview.vue'),
    },
  ],
}

export default web

const Layout = () => import('@/components/Layout/web.vue')
const NfRouterView = () => import('@/components/NfRouterView')

const web = {
  path: '/web',
  name: 'web',
  meta: {
    title: '前台',
  },
  component: Layout,
  redirect: '/web/index',
  children: [
    {
      path: '/web/index',
      name: 'webIndex',
      meta: {
        title: '首页',
      },
      component: () => import('@/views/web/index.vue'),
    },
    {
      path: '/note',
      name: 'webNote',
      redirect: '/note/list',
      meta: {
        title: '学习笔记',
      },
      component: NfRouterView,
      children: [
        {
          path: 'list',
          name: 'webNoteList',
          meta: {
            title: '笔记列表',
            rename: 'webNote',
          },
          component: () => import('@/views/web/note/index.vue'),
        },
        {
          path: 'preview',
          name: 'webNotePreview',
          meta: {
            title: '笔记查看',
            rename: 'webNote',
          },
          component: () => import('@/views/web/note/preview.vue'),
        },
      ],
    },
  ],
}

export default web

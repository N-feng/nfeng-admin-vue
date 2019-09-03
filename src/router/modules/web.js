const Layout = () => import('@/components/Layout/web.vue')

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
      path: '/note/index',
      name: 'noteIndex',
      meta: {
        title: '学习笔记',
      },
      component: () => import('@/views/web/note/index.vue'),
    },
  ],
}

export default web

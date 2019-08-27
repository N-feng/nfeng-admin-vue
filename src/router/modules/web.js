const Layout = () => import('@/components/Layout/web.vue')

const web = {
  path: '/web',
  name: 'web',
  meta: {
    title: '前台展示',
  },
  component: Layout,
  redirect: '/web/index',
  children: [{
    path: '/web/index',
    name: 'webIndex',
    meta: {
      title: '前台欢迎页',
    },
    component: () => import('@/views/web/Home.vue'),
  }],
}

export default web

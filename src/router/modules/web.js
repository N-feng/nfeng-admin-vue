const Layout = () => import('@/components/Layout/web.vue')

const web = {
  path: '/web',
  name: 'web',
  title: '前台',
  component: Layout,
  redirect: '/web/home',
  children: [{
    path: 'home',
    name: 'Home',
    title: '欢迎页',
    component: () => import('@/views/web/Home.vue'),
  }],
}

export default web

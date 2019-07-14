const Layout = () => import('@/components/Layout')

const web = {
  path: '/',
  name: 'web',
  title: '欢迎页',
  component: Layout,
  redirect: '/home',
  children: [{
    path: 'home',
    name: 'Home',
    component: () => import('@/views/web/Home.vue'),
  }],
}

export default web

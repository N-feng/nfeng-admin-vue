const Layout = () => import('@/components/Layout/admin.vue')

const admin = {
  path: '/admin',
  name: 'admin',
  title: '后台管理',
  component: Layout,
  redirect: '/admin/landing',
  children: [
    {
      path: 'landing',
      name: 'landing',
      title: '欢迎页',
      component: () => import('@/views/admin/landing/index.vue'),
    },
  ],
}

export default admin

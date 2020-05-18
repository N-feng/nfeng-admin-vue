const Layout = () => import('../../views/admin/layout.vue')

export const admin = [{
  path: '/admin',
  name: 'admin',
  meta: {
    title: 'admin',
  },
  component: Layout,
  children: [
    {
      path: 'user/list',
      name: '用户列表',
      component: () => import('../../views/admin/user/list.vue'),
    },
    {
      path: 'user/create',
      name: '创建用户',
      component: () => import('../../views/admin/user/create.vue'),
    },
    {
      path: 'role/list',
      name: '角色列表',
      component: () => import('../../views/admin/role/list.vue'),
    },
    {
      path: 'role/create',
      name: '创建角色',
      component: () => import('../../views/admin/role/create.vue'),
    },
    {
      path: 'access/list',
      name: '权限列表',
      component: () => import('../../views/admin/access/list.vue'),
    },
    {
      path: 'access/create',
      name: '创建权限',
      component: () => import('../../views/admin/access/create.vue'),
    },
    {
      path: 'role-access/create',
      name: '授权',
      component: () => import('../../views/admin/role-access/create.vue'),
    },
    {
      path: 'focus/create',
      name: '创建轮播图',
      component: () => import('../../views/admin/focus/create.vue'),
    },
    {
      path: 'focus/list',
      name: '轮播图列表',
      component: () => import('../../views/admin/focus/list.vue'),
    },
  ],
}, {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录',
  },
  component: () => import('../../views/admin/user/login.vue'),
}]

export default admin

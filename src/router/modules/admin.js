const Layout = () => import('@/components/Layout/admin.vue')

const admin = {
  path: '/admin',
  name: 'admin',
  meta: {
    title: '后台管理',
  },
  component: Layout,
  redirect: '/admin/landing',
  children: [
    {
      path: '/admin/landing',
      name: 'landing',
      meta: {
        title: '后台欢迎页',
      },
      component: () => import('@/views/admin/landing/index.vue'),
    },
  ],
}


const role = {
  path: '/role',
  name: 'role',
  redirect: '/role/list',
  meta: {
    title: '角色管理',
  },
  component: Layout,
  children: [
    {
      path: '/role/list',
      name: 'roleList',
      meta: {
        title: '角色列表',
      },
      component: () => import('@/views/admin/role/list.vue'),
    },
    {
      path: '/role/create',
      name: 'roleCreate',
      meta: {
        title: '角色创建',
      },
      component: () => import('@/views/admin/role/create.vue'),
    },
    {
      path: '/role/edit',
      name: 'roleEdit',
      meta: {
        title: '角色编辑',
      },
      component: () => import('@/views/admin/role/create.vue'),
    },
  ],
}

export default [admin, role]

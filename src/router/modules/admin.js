const Layout = () => import('@/components/Layout/admin.vue')

export const admin = {
  path: '/admin',
  name: 'admin',
  meta: {
    title: '首页',
  },
  redirect: '/admin/index',
  component: Layout,
  children: [
    {
      path: '/admin/index',
      name: 'adminIndex',
      meta: {
        title: '登陆页',
      },
      component: () => import('@/views/admin/index.vue'),
    },
    // {
    //   path: '/auth/list',
    //   name: 'authList',
    //   meta: {
    //     title: '用户管理',
    //   },
    //   component: () => import('@/views/admin/auth/list.vue'),
    // },
  ],
}

const manage = {
  path: '/manage',
  name: 'manage',
  meta: {
    title: '后台管理',
  },
  redirect: '/manage/role',
  component: Layout,
  children: [
    {
      path: '/manage/role',
      name: 'manageRole',
      meta: {
        title: '角色管理',
      },
      component: () => import('@/views/admin/role/list_role.vue'),
    },
  ],
}

const expand = {
  path: '/expand',
  name: 'expand',
  meta: {
    title: '拓展功能',
  },
  redirect: '/expand/task',
  component: Layout,
  children: [
    {
      path: '/expand/task',
      name: 'expandTask',
      meta: {
        title: '任务管理',
      },
      component: () => import('@/views/admin/task/list.vue'),
    },
    // {
    //   path: '/img/list',
    //   name: 'imgList',
    //   meta: {
    //     title: '图片管理',
    //   },
    //   component: () => import('@/views/admin/img/list.vue'),
    // },
    {
      path: '/expand/noteList',
      name: 'noteList',
      meta: {
        title: '笔记管理',
      },
      component: () => import('@/views/admin/note/list.vue'),
    },
    {
      path: '/expand/noteCreate',
      name: 'noteCreate',
      meta: {
        rename: 'noteList',
        title: '笔记创建',
      },
      component: () => import('@/views/admin/note/create.vue'),
    },
  ],
}

export default [admin, manage, expand]

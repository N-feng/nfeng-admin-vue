const system = [{
  path: '/login',
  name: 'login',
  meta: {
    title: '登录',
  },
  component: () => import('@/views/system/login.vue'),
},
{
  path: '/signup',
  name: 'signup',
  meta: {
    title: '注册',
  },
  component: () => import('@/views/system/signup.vue'),
}, {
  path: '*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在',
  },
  component: () => import('@/views/system/404.vue'),
}]

export default system

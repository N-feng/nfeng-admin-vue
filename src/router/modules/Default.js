const Layout = () => import('../../views/default/layout.vue')

const web = [{
  path: '/',
  name: 'web',
  meta: {
    title: 'The front desk',
  },
  component: Layout,
  children: [{
    path: '/index',
    name: 'webIndex',
    meta: {
      title: 'Landing',
    },
    component: () => import('../../views/default/index.vue'),
  }, {
    path: '/translate',
    name: 'translate',
    component: () => import('../../views/default/translate.vue'),
  }]
}, {
  path: '*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在',
  },
  component: () => import('../../views/default/404.vue'),
}]

export default web

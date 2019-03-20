import Main from '../views/main/main.vue'
// import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import router from '../views/main/router.vue'
import userList from '../views/user/list.vue'
import upload from '../views/img/upload.vue'
// web 页面
import Web from '../pc/web/public/index.vue'
// import Simple from '../pc/web/public/simple.vue'
import Profile from '../pc/web/public/profile.vue'
// admin 页面
import Admin from '../pc/admin/public/index.vue'
import Login from '../pc/admin/public/login.vue'

const routes = [
  {
    path: '/',
    name: 'Profile',
    component: Profile,
    title: '欢迎页',
  },
  {
    path: '/web',
    name: 'Web',
    component: Web,
    title: '首页',
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    title: '个人页',
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    title: '后台首页',
  },
  {
    path: '/login',
    component: Login,
    title: '登录页面',
  },
  {
    path: '/user',
    name: 'Main',
    component: Main,
    title: '功能模块',
    children: [
      {
        path: 'list',
        component: userList,
        title: '用户列表',
      },
      {
        path: '/img/upload',
        component: upload,
        title: '图片上传',
      },
    ],
  },
  {
    path: '/',
    component: router,
    title: '角色管理',
    children: [
      {
        path: '/login',
        title: '登陆页面',
        component: Login,
      },
      {
        path: '/register',
        title: '注册页面',
        component: Register,
      },
    ],
  },
]

export default routes

import Main from '../views/main/main.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import router from '../views/main/router.vue'
import userList from '../views/user/list.vue'
import upload from '../views/img/upload.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        title: '功能模块',
        children: [
            {
                path: '/user/list',
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

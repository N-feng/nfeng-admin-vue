import Vue from 'vue';
import Router from 'vue-router';
import WebIndex from '../views/web/index.vue';
import AdminMain from '../views/admin/main.vue';
import Login from '../views/admin/login.vue';
import Landing from '../views/admin/landing.vue';
import UserList from '../views/admin/userlist.vue';
import Page404 from '../views/public/404.vue';

Vue.use(Router);

export const page404 = {
    path: '*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在',
    },
    component: Page404,
};

export const mainRouter = [
    {
        path: '/',
        name: 'Web',
        component: WebIndex,
        title: '欢迎页',
    },
    {
        path: '/Admin',
        name: 'Admin',
        title: '后台',
        redirect: '/system/landing',
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
        title: '登录',
    },
];

export const adminRouter = {
    path: '/system',
    name: 'system',
    component: AdminMain,
    children: [
        {
            path: 'landing',
            name: 'landing',
            component: Landing,
            title: '登陆页',
        },
        {
            path: 'userlist',
            name: 'userlist',
            component: UserList,
            title: '用户列表',
        },
        {
            path: 'landinga',
            name: 'landing',
            component: Landing,
            title: '图片管理',
        },
    ],
};

export const routers = [
    adminRouter,
    ...mainRouter,
    page404,
];

const router = new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: routers,
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;

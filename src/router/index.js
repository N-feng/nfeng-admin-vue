import Vue from 'vue';
import Router from 'vue-router';
import web from '../views/web/index.vue';
import main from '../views/admin/main.vue';
import login from '../views/admin/login.vue';
import signup from '../views/admin/signup.vue';
import landing from '../views/admin/landing.vue';
import userlist from '../views/admin/userlist.vue';
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
        name: 'web',
        component: web,
        title: '欢迎页',
    },
    {
        path: '/admin',
        name: 'admin',
        redirect: '/system/landing',
        title: '后台',
    },
    {
        path: '/auth/login',
        name: 'login',
        component: login,
        title: '登录',
    },
    {
        path: '/auth/signup',
        name: 'signup',
        component: signup,
        title: '注册',
    },
];

export const adminRouter = {
    path: '/system',
    name: 'system',
    component: main,
    redirect: '/system/landing',
    children: [
        {
            path: 'landing',
            name: 'landing',
            component: landing,
            title: '登陆页',
        },
        {
            path: 'userlist',
            name: 'userlist',
            component: userlist,
            title: '用户列表',
        },
        {
            path: 'landinga',
            name: 'landing',
            component: landing,
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

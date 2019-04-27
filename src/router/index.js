import Vue from 'vue';
import Router from 'vue-router';
import web from '../views/web/index.vue';
import main from '../views/admin/main.vue';
import login from '../views/admin/login.vue';
import signup from '../views/admin/signup.vue';
import landing from '../views/admin/landing.vue';
import userlist from '../views/admin/userlist.vue';
import roleList from '../views/admin/role/list.vue';
import roleCreate from '../views/admin/role/create.vue';
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
        title: '欢迎页',
        component: web,
    },
    {
        path: '/admin',
        name: 'admin',
        redirect: '/system/landing',
        title: '后台',
    },
    {
        path: '/login',
        name: 'login',
        title: '登录',
        component: login,
    },
    {
        path: '/signup',
        name: 'signup',
        title: '注册',
        component: signup,
    },
];

export const adminRouter = {
    path: '/system',
    name: 'system',
    redirect: '/system/landing',
    component: main,
    children: [
        {
            path: '/system/landing',
            name: 'landing',
            title: '登陆页',
            component: landing,
        },
        {
            path: '/system/role',
            name: 'role',
            redirect: '/system/role/list',
            title: '角色管理',
        },
        {
            path: '/system/role/list',
            name: 'roleList',
            title: '角色列表',
            component: roleList,
        },
        {
            path: '/system/role/create',
            name: 'roleCreate',
            title: '角色创建',
            component: roleCreate,
        },
        {
            path: '/system/userlist',
            name: 'userlist',
            title: '用户列表',
            component: userlist,
        },
        {
            path: 'landinga',
            name: 'landing',
            title: '图片管理',
            component: landing,
        },
    ],
};

export const roleRouter = {
    path: '/role',
    name: 'role',
    component: main,
    children: [],
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

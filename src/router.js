import Vue from 'vue';
import Router from 'vue-router';
import Page404 from './views/public/404.vue';
import web from './views/web/index.vue';
import main from './components/admin/main-box.vue';
import login from './views/admin/auth/login.vue';
import signup from './views/admin/auth/signup.vue';
import authList from './views/admin/auth/list.vue';
import landing from './views/admin/public/landing.vue';
import roleList from './views/admin/role/list.vue';
import roleCreate from './views/admin/role/create.vue';
import imgList from './views/admin/img/list.vue';

Vue.use(Router);

const page404 = {
    path: '*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在',
    },
    component: Page404,
};

const mainRouter = [
    {
        path: '/',
        name: 'web',
        title: '欢迎页',
        component: web,
    },
    {
        path: '/admin',
        name: 'admin',
        redirect: '/auth/landing',
        title: '后台',
    },
    {
        path: '/auth/login',
        name: 'login',
        title: '登录',
        component: login,
    },
    {
        path: '/auth/signup',
        name: 'signup',
        title: '注册',
        component: signup,
    },
];

const authRouter = {
    path: '/auth',
    name: 'auth',
    redirect: '/auth/landing',
    component: main,
    children: [
        {
            path: 'landing',
            name: 'landing',
            title: '登陆页',
            component: landing,
        },
        {
            path: 'list',
            name: 'list',
            title: '用户列表',
            component: authList,
        },
    ],
};

const roleRouter = {
    path: '/role',
    name: 'role',
    redirect: '/role/list',
    title: '角色管理',
    component: main,
    children: [
        {
            path: 'list',
            name: 'roleList',
            title: '角色列表',
            component: roleList,
        },
        {
            path: 'create',
            name: 'roleCreate',
            title: '角色创建',
            component: roleCreate,
        },
    ],
};

const imgRouter = {
    path: '/img',
    name: 'img',
    redirect: '/img/list',
    title: '图片管理',
    component: main,
    children: [
        {
            path: 'list',
            name: 'list',
            title: '图片列表',
            component: imgList,
        },
    ],
};

const routers = [
    authRouter,
    roleRouter,
    imgRouter,
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

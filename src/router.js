import Vue from 'vue';
import Router from 'vue-router';
import Page404 from './views/public/404.vue';
import web from './views/web/index.vue';
import main from './components/admin/main-box.vue';
import publicLanding from './views/admin/public/landing.vue';
import authLogin from './views/admin/auth/login.vue';
import authSignup from './views/admin/auth/signup.vue';
import authList from './views/admin/auth/list.vue';
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
        redirect: '/landing',
        title: '后台',
    },
    {
        path: '/auth/login',
        name: 'authLogin',
        title: '登录',
        component: authLogin,
    },
    {
        path: '/auth/signup',
        name: 'authSignup',
        title: '注册',
        component: authSignup,
    },
];

const publicRoter = {
    path: '/public',
    name: 'public',
    redirect: '/public/landing',
    component: main,
    children: [
        {
            path: '/public/landing',
            name: 'publicLanding',
            title: '登陆页',
            component: publicLanding,
        },
    ],
};

const authRouter = {
    path: '/auth',
    name: 'auth',
    redirect: '/auth/list',
    component: main,
    children: [
        {
            path: '/auth/list',
            name: 'authList',
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
            path: '/role/list',
            name: 'roleList',
            title: '角色列表',
            component: roleList,
        },
        {
            path: '/role/create',
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
            path: '/img/list',
            name: 'imgList',
            title: '图片列表',
            component: imgList,
        },
    ],
};

const routers = [
    publicRoter,
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

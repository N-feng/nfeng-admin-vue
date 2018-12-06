import Home from '../views/main/Home.vue';
import Login from '../views/auth/login.vue';
import Register from '../views/auth/register.vue';
import router from '../views/base/router.vue';
import userList from '../views/auth/userList.vue';
let routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/auth/userList',
        children: [
            {
                path: 'auth',
                component: router,
                children: [
                    {
                        path: 'userList',
                        component: userList
                    }
                ]
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/main/About.vue')
    },
    {
        path: '/auth',
        component: router,
        children: [
            {
                path: 'login',
                component: Login
            },
            {
                path: 'register',
                component: Register
            }
        ]
    }
];

export default routes
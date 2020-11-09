import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import { component } from 'vue/types/umd'
// import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../views/Home.vue";
import Layout from "@/layout/index.vue";

Vue.use(VueRouter);

export const constantRoutes: any = [
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
    hidden: true,
  },
  // {
  //   path: '/403',
  //   name: '403',
  //   component: () => import('@/views/403'),
  //   hidden: true,
  // },
  // {
  //   path: '/404',
  //   name: '404',
  //   component: () => import('@/views/404'),
  //   hidden: true,
  // },
];

export const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    meta: {
      title: "首页",
      icon: "home-4-line",
      affix: true,
    },
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("@/views/Home.vue"),
        meta: {
          title: "首页",
          icon: "home-4-line",
          affix: true,
          sidebarActive: "/",
        },
      },
    ],
  },
  {
    path: "/nf",
    component: Layout,
    meta: {
      title: "组件",
      icon: "apps-line",
    },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import('@/views/nf/table.vue'),
        meta: {
          title: '表格',
          icon: 'table-2',
        },
      },
      {
        path: "icon",
        name: "Icon",
        component: () => import('@/views/nf/icon.vue'),
        meta: {
          title: '图标',
          icon: 'remixicon-line',
        },
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "介绍页",
    },
  },
  {
    path: "/micro-vue",
    name: "Micro-vue",
    component: Layout,
    redirect: "/micro-vue/courses/list",
    meta: {
      title: "vue组件",
      icon: "error-warning-line",
      affix: true,
    },
    children: [
      {
        path: "courses/list",
        component: { template: "<p>courses/list</p>" },
        meta: {
          title: "crud列表页",
          icon: "home-4-line",
          affix: true,
          sidebarActive: "/micro-vue",
        },
      },
    ],
  },
  {
    path: "/error",
    name: "Error",
    component: Layout,
    redirect: "/error/403",
    meta: {
      title: "错误页",
      icon: "error-warning-line",
    },
    children: [
      {
        path: "403",
        name: "Error403",
        component: () => import("@/views/403.vue"),
        meta: {
          title: "403",
          icon: "error-warning-line",
        },
      },
      {
        path: "404",
        name: "Error404",
        component: () => import("@/views/404.vue"),
        meta: {
          title: "404",
          icon: "error-warning-line",
        },
      },
    ],
  },
  {
    path: "/*",
    redirect: "/404",
    hidden: true,
  },
];

// const routes: Array<RouteConfig> = [
//   {
//     path: "/home",
//     name: "Home",
//     component: Home,
//     children: [
//       {
//         path: "child-one",
//         component: { template: "<p>child-one</p>" },
//       },
//       {
//         path: "child-two",
//         component: { template: "<p>child-two</p>" },
//       },
//     ],
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue"),
//   },
//   {
//     path: "/login",
//     component: () => import("../views/Login.vue"),
//   },
//   {
//     path: "/micro-*",
//     component: () => import("../layout/index.vue"),
//     children: [
//       {
//         path: ":resource/list",
//         meta: {
//           sidebarActive: "/micro-vue",
//         },
//       },
//     ],
//   },
// ];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  // routes: constantRoutes,
  routes: [...constantRoutes, ...asyncRoutes],
});

// const router = createRouter({
//   history: createWebHashHistory(),
//   // routes: constantRoutes,
//   routes: [...constantRoutes, ...asyncRoutes]
// })

export default router;

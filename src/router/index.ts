import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/index.vue";
import demoRoutes from "./demo";

Vue.use(VueRouter);

export const constantRoutes: any = [
  {
    path: "/login",
    component: () => import("@/views/login/Login.vue"),
    hidden: true,
  },
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/403/403.vue"),
    hidden: true,
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404/404.vue"),
    hidden: true,
  },
];

export const asyncRoutes = [
  {
    path: "/",
    name: "首页",
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
        component: () => import("@/views/home/Home.vue"),
        meta: {
          title: "首页",
          icon: "home-4-line",
          affix: true,
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
      import(/* webpackChunkName: "about" */ "../views/about/About.vue"),
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
        name: "courses/list",
        // component: { template: "<div>courses/list</div>" },
        meta: {
          title: "表格",
          icon: "table-2",
          // affix: true,
          // target: "_blank",
          // sidebarActive: "/micro-vue",
        },
      },
    ],
  },
  {
    path: "/test",
    component: Layout,
    redirect: "/test/test",
    meta: {
      title: "动态路由测试",
      icon: "test-tube-line",
    },
    children: [
      {
        path: "test",
        name: "Test",
        component: () => import("@/views/test/Test.vue"),
        meta: {
          title: "动态路由测试",
          icon: "test-tube-line",
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
      title: "异常页",
      icon: "error-warning-line",
    },
    children: [
      {
        path: "403",
        name: "Error403",
        component: () => import("@/views/403/403.vue"),
        meta: {
          title: "403",
          icon: "error-warning-line",
        },
      },
      {
        path: "404",
        name: "Error404",
        component: () => import("@/views/404/404.vue"),
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

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  // routes: constantRoutes,
  routes: [...constantRoutes, ...demoRoutes, ...asyncRoutes],
});

export default router;

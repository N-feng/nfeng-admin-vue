import { Module, ActionTree, MutationTree, GetterTree } from "vuex";
import { RoutesState } from "./types";
import { RootState } from "../types";
import { asyncRoutes, constantRoutes } from "@/router";
import { getRouterList } from "@/api/router";
import {
  convertRouter,
  // filterRoutes,
  routerList,
} from "@/utils/routes";

/**
 * state
 */
export const state: RoutesState = {
  routes: [
    {
      path: "/index",
      name: "首页",
      title: "Home",
      meta: {
        title: "首页",
        icon: "home-4-line",
        affix: true,
      },
      children: [],
    },
    // {
    //   path: "/micro-react",
    //   title: "React",
    //   children: [
    //     {
    //       path: "/micro-react/child-one",
    //       title: "MicroChildOne",
    //     },
    //     {
    //       path: "/micro-react/child-two",
    //       title: "MicroChildTwo",
    //     },
    //   ],
    // },
    {
      path: "/micro-vue",
      title: "Vue",
      meta: {
        title: "Vue",
        icon: "apps-line",
      },
      children: [
        // {
        //   path: "/micro-vue/home",
        //   title: "首页",
        // },
        {
          path: "/micro-vue/courses/list",
          // name: "课程管理",
          title: "课程管理",
          meta: {
            title: "表格",
            icon: "table-2",
            // affix: true,
            // target: "_blank",
          },
        },
        // {
        //   path: "/micro-vue/episodes/list",
        //   title: "课时管理",
        // },
        // {
        //   path: "/micro-vue/users/list",
        //   title: "用户管理",
        // },
      ],
    },
    {
      path: "/micro-react",
      meta: {
        title: "React",
        icon: "apps-line",
      },
      children: [
        {
          path: "/micro-react/form/create",
          meta: {
            title: "动态表单"
          },
        },
      ]
    },
    {
      path: "/comp",
      meta: {
        title: "组件",
        icon: "apps-line",
      },
      children: [
        {
          path: "/comp/icon",
          meta: {
            title: "图标",
            // icon: "remixicon-line",
          },
        },
        {
          path: "/comp/img-preview",
          meta: {
            title: "图片预览",
            // icon: "table-2",
          },
        },
        {
          path: "/comp/description",
          meta: {
            title: "详情组件",
            // icon: "table-2",
          },
        },
      ],
    },
    {
      path: "/table",
      meta: {
        title: "Table",
        icon: "table-2",
      },
      children: [
        {
          path: "/table/basic",
          meta: {
            title: "基础表格",
          },
        },
        {
          path: "/table/customerCell",
          meta: {
            title: "自定义列",
          },
        },
        {
          path: "/table/formTable",
          meta: {
            title: "开启搜索区域",
          },
        },
      ],
    },
    {
      path: "/form",
      meta: {
        title: "Form",
        icon: "table-2",
      },
      children: [
        {
          path: "/form/basic",
          meta: {
            title: "基础表单",
          },
        },
        {
          path: "/form/advancedForm",
          meta: {
            title: "可收缩表单",
          },
        },
        {
          path: "/form/ruleForm",
          meta: {
            title: "表单验证",
          },
        },
        {
          path: "/form/dynamicForm",
          meta: {
            title: "动态表单",
          },
        },
      ],
    },
    {
      path: "/test/test",
      meta: {
        title: "动态路由测试",
        icon: "test-tube-line",
      },
      children: [],
    },
    {
      path: "/error",
      meta: {
        title: "异常页",
        icon: "error-warning-line",
      },
      children: [
        {
          path: "/error/403",
          meta: {
            title: "403",
            icon: "error-warning-line",
          },
        },
        {
          path: "/error/404",
          meta: {
            title: "404",
            icon: "error-warning-line",
          },
        },
      ],
    },
  ],
  hasInited: false,
};

/**
 * getters
 */
export const getters: GetterTree<RoutesState, RootState> = {
  routes(state: RoutesState): Array<any> {
    return state.routes;
  },
  hasInited(state: RoutesState): boolean {
    return state.hasInited;
  },
};

/**
 * mutations
 */
export const mutations: MutationTree<RoutesState> = {
  setRoutes(state, routes) {
    state.routes = routes;
  },
  // setPartialRoutes(state, routes) {
  //   state.partialRoutes = routes
  // },
};

/**
 * actions
 */
export const actions: ActionTree<RoutesState, RootState> = {
  // /**
  //  * @author chuzhixin 1204505056@qq.com
  //  * @description intelligence模式设置路由
  //  * @param {*} { commit }
  //  * @returns
  //  */
  // async setRoutes({ commit }) {
  //   const finallyRoutes = filterRoutes([...constantRoutes, ...asyncRoutes]);
  //   commit("setRoutes", finallyRoutes);
  //   return [...asyncRoutes];
  // },
  // /**
  //  * @author chuzhixin 1204505056@qq.com
  //  * @description all模式设置路由
  //  * @param {*} { commit }
  //  * @returns
  //  */
  // async setAllRoutes({ commit }) {
  //   let { data } = await getRouterList();
  //   if (data[data.length - 1].path !== "*")
  //     data.push({ path: "*", redirect: "/404", hidden: true });
  //   const asyncRoutes = convertRouter(data);
  //   const finallyRoutes = filterRoutes([...constantRoutes, ...asyncRoutes]);
  //   commit("setRoutes", finallyRoutes);
  //   return [...asyncRoutes];
  // },
  addRouters({ state }) {
    return new Promise((resolve) => {
      const { routes } = state;
      const list = routerList(routes);
    });
  },
};

const namespaced: boolean = true;

export const routes: Module<RoutesState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};

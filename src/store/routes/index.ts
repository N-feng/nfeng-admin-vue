import { Module, ActionTree, MutationTree, GetterTree } from "vuex";
import { RoutesState } from "./types";
import { RootState } from "../types";
import { asyncRoutes, constantRoutes } from "@/router";
import { getRouterList } from "@/api/router";
import { convertRouter, filterRoutes } from "@/utils/routes";

/**
 * state
 */
export const state: RoutesState = {
  routes: [],
};

/**
 * getters
 */
export const getters: GetterTree<RoutesState, RootState> = {
  routes(state: RoutesState): Array<any> {
    return state.routes;
  },
};

/**
 * mutations
 */
export const mutations: MutationTree<RoutesState> = {
  setRoutes(state, routes) {
    state.routes = routes
  },
  // setPartialRoutes(state, routes) {
  //   state.partialRoutes = routes
  // },
};

/**
 * actions
 */
export const actions: ActionTree<RoutesState, RootState> = {
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description intelligence模式设置路由
   * @param {*} { commit }
   * @returns
   */
  async setRoutes({ commit }) {
    const finallyRoutes = filterRoutes([...constantRoutes, ...asyncRoutes]);
    commit("setRoutes", finallyRoutes);
    return [...asyncRoutes];
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description all模式设置路由
   * @param {*} { commit }
   * @returns
   */
  async setAllRoutes({ commit }) {
    let { data } = await getRouterList();
    if (data[data.length - 1].path !== "*")
      data.push({ path: "*", redirect: "/404", hidden: true });
    const asyncRoutes = convertRouter(data);
    const finallyRoutes = filterRoutes([...constantRoutes, ...asyncRoutes]);
    commit("setRoutes", finallyRoutes);
    return [...asyncRoutes];
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

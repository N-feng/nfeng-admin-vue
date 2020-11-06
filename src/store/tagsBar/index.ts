import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { TagsBarState } from './types';
import { RootState } from '../types';

/**
 * state
 */
export const state: TagsBarState = {
  visitedRoutes: []
};

/**
 * getters
 */
export const getters: GetterTree<TagsBarState, RootState> = {
  visitedRoutes(state: TagsBarState): Array<any> {
    return state.visitedRoutes;
  }
};

/**
 * mutations
 */
export const mutations: MutationTree<TagsBarState> = {
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 添加标签页
   * @param {*} state
   * @param {*} route
   * @returns
   */
  addVisitedRoute(state, route) {
    let target = state.visitedRoutes.find((item) => item.path === route.path)
    if (target) {
      if (route.fullPath !== target.fullPath) Object.assign(target, route)
      return
    }
    state.visitedRoutes.push(Object.assign({}, route))
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 删除当前标签页
   * @param {*} state
   * @param {*} route
   * @returns
   */
  delVisitedRoute(state, route) {
    state.visitedRoutes.forEach((item, index) => {
      if (item.path === route.path) state.visitedRoutes.splice(index, 1)
    })
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 删除当前标签页以外其它全部多标签页
   * @param {*} state
   * @param {*} route
   * @returns
   */
  delOthersVisitedRoutes(state, route) {
    state.visitedRoutes = state.visitedRoutes.filter(
      (item) => item.meta.affix || item.path === route.path
    )
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 删除当前标签页左边全部多标签页
   * @param {*} state
   * @param {*} route
   * @returns
   */
  delLeftVisitedRoutes(state, route) {
    let index = state.visitedRoutes.length
    state.visitedRoutes = state.visitedRoutes.filter((item) => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item)
      return item.meta.affix || index <= state.visitedRoutes.indexOf(item)
    })
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 删除当前标签页右边全部多标签页
   * @param {*} state
   * @param {*} route
   * @returns
   */
  delRightVisitedRoutes(state, route) {
    let index = state.visitedRoutes.length
    state.visitedRoutes = state.visitedRoutes.filter((item) => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item)
      return item.meta.affix || index >= state.visitedRoutes.indexOf(item)
    })
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 删除全部多标签页
   * @param {*} state
   * @param {*} route
   * @returns
   */
  delAllVisitedRoutes(state) {
    state.visitedRoutes = state.visitedRoutes.filter((item) => item.meta.affix)
  },
};

/**
 * actions
 */
export const actions: ActionTree<TagsBarState, RootState> = {
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 添加标签页
   * @param {*} { commit }
   * @param {*} route
   */
  addVisitedRoute({ commit }, route) {
    commit('addVisitedRoute', route)
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 删除当前标签页
   * @param {*} { commit }
   * @param {*} route
   */
  delVisitedRoute({ commit }, route) {
    commit('delVisitedRoute', route)
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 删除当前标签页以外其它全部多标签页
   * @param {*} { commit }
   * @param {*} route
   */
  delOthersVisitedRoutes({ commit }, route) {
    commit('delOthersVisitedRoutes', route)
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 删除当前标签页左边全部多标签页
   * @param {*} { commit }
   * @param {*} route
   */
  delLeftVisitedRoutes({ commit }, route) {
    commit('delLeftVisitedRoutes', route)
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 删除当前标签页右边全部多标签页
   * @param {*} { commit }
   * @param {*} route
   */
  delRightVisitedRoutes({ commit }, route) {
    commit('delRightVisitedRoutes', route)
  },
  /**
   * @author chuzhixin 1204505056@qq.com
   * @description 删除全部多标签页
   * @param {*} { commit }
   */
  delAllVisitedRoutes({ commit }) {
    commit('delAllVisitedRoutes')
  },
};

const namespaced: boolean = true;

export const tagsBar: Module<TagsBarState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
import { Module, ActionTree, MutationTree, GetterTree } from "vuex";
import { AclState } from "./types";
import { RootState } from "../types";

/**
 * state
 */
export const state: AclState = {
  admin: false,
  role: [],
  ability: [],
};

/**
 * getters
 */
export const getters: GetterTree<AclState, RootState> = {
  admin(state: AclState): boolean {
    return state.admin
  },
  role(state: AclState): Array<any> {
    return state.role
  },
  ability(state: AclState): Array<any> {
    return state.ability
  },
};

/**
 * mutations
 */
export const mutations: MutationTree<AclState> = {
  setFull(state, admin) {
    state.admin = admin
  },
  setRole(state, role) {
    state.role = role
  },
  setAbility(state, ability) {
    state.ability = ability
  },
};

/**
 * actions
 */
export const actions: ActionTree<AclState, RootState> = {
  setFull({ commit }, admin) {
    commit('setFull', admin)
  },
  setRole({ commit }, role) {
    commit('setRole', role)
  },
  setAbility({ commit }, ability) {
    commit('setAbility', ability)
  },
};

const namespaced: boolean = true;

export const acl: Module<AclState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};

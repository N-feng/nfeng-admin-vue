import { Module, ActionTree, MutationTree, GetterTree } from "vuex";
import { SettingsState } from "./types";
import { RootState } from "../types";
import defaultSettings from "@/config";
import { isJson } from "@/utils/validate";

const { logo, title } = defaultSettings;

const getLocalStorage = (key) => {
  const value: any = localStorage.getItem(key);
  if (isJson(value)) {
    return JSON.parse(value);
  } else {
    return false;
  }
};

const { collapse } = getLocalStorage("vue-admin-beautiful-pro-collapse");

/**
 * state
 */
export const state: SettingsState = {
  logo,
  title,
  collapse,
  device: "desktop",
};

/**
 * getters
 */
export const getters: GetterTree<SettingsState, RootState> = {
  collapse(state: SettingsState): boolean {
    return state.collapse;
  },
  device(state: SettingsState): string {
    return state.device;
  },
  logo(state: SettingsState): string {
    return state.logo;
  },
  title(state: SettingsState): string {
    return state.title;
  },
};

/**
 * mutations
 */
export const mutations: MutationTree<SettingsState> = {
  toggleCollapse(state: SettingsState, payload: string) {
    state.collapse = !state.collapse;
    localStorage.setItem(
      "vue-admin-beautiful-pro-collapse",
      `{"collapse":${state.collapse}}`
    );
  },
  toggleDevice(state, device) {
    state.device = device;
  },
  foldSideBar(state) {
    state.collapse = true;
  },
};

/**
 * actions
 */
export const actions: ActionTree<SettingsState, RootState> = {
  toggleCollapse({ commit }) {
    commit("toggleCollapse");
  },
  toggleDevice({ commit }, device) {
    commit("toggleDevice", device);
  },
  foldSideBar({ commit }) {
    commit("foldSideBar");
  },
};

const namespaced: boolean = true;

export const settings: Module<SettingsState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};

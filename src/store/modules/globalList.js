import { getMenus, getRoleNameList } from '@/api/global'
import { getRoleName } from '@/utils/auth'

const globalList = {
  state: {
    menus: [],
    roleNameList: [],
  },
  mutations: {
    SET_MENUS: (state, payload) => {
      state.menus = payload
    },
    SET_ROLENAMELIST: (state, payload) => {
      state.roleNameList = payload
    },
  },
  actions: {
    // 获取菜单
    getMenus({ commit }) {
      getMenus(getRoleName()).h_then(({ data }) => {
        commit('SET_MENUS', data)
      })
    },
    getRoleNameList({ commit }) {
      getRoleNameList().h_then(({ data }) => {
        commit('SET_ROLENAMELIST', data)
      })
    },
  },
}

export default globalList

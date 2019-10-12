import { getRoleNameList } from '@/api/global'

const globalList = {
  state: {
    roleNameList: [],
  },
  mutations: {
    SET_ROLENAMELIST: (state, payload) => {
      state.roleNameList = payload
    },
  },
  actions: {
    getRoleNameList({ commit }) {
      getRoleNameList().h_then(({ data }) => {
        commit('SET_ROLENAMELIST', data)
      })
    },
  },
}

export default globalList

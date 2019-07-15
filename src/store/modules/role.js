import { getRoleList } from '@/api/role'

const role = {
  state: {
    roleList: [],
  },
  mutations: {
    SET_ROLELIST: (state, payload) => {
      state.roleList = payload
    },
  },
  actions: {
    getRoleList({ commit }) {
      return new Promise((resolve) => {
        getRoleList().then((res) => {
          resolve(res)
          const { data } = res
          commit('SET_ROLELIST', data)
        })
      })
    },
  },
}

export default role

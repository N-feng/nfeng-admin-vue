import { getRoleOption } from '@/api/role'

const globalList = {
  state: {
    roleOption: [],
  },
  mutations: {
    SET_ROLEOPTION: (state, payload) => {
      state.roleOption = payload
    },
  },
  actions: {
    getRoleOption({ commit }) {
      return new Promise((resolve) => {
        getRoleOption().then((res) => {
          resolve(res)
          const { data } = res
          commit('SET_ROLEOPTION', data)
        })
      })
    },
  },
}

export default globalList

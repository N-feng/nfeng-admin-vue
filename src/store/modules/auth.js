import { login, getMenu } from '@/api/auth'
import {
  getToken,
  setToken,
  getName,
  setName,
} from '@/utils/auth'

const auth = {
  state: {
    token: getToken(),
    username: getName(),
    menus: [],
  },
  mutations: {
    SET_TOKEN: (state, payload) => {
      state.token = payload
    },
    SET_NAME: (state, payload) => {
      state.username = payload
    },
    SET_MENUS: (state, payload) => {
      state.menus = payload
    },
  },
  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return login(userInfo.username, userInfo.password).then((res) => {
        const { data } = res
        setToken(data.token)
        setName(data.username)
        commit('SET_TOKEN', data.token)
        commit('SET_NAME', data.username)
      })
    },
    getMenu({ commit }) {
      return getMenu().then((res) => {
        const { data } = res
        commit('SET_MENUS', data)
      })
    },
  },
}

export default auth

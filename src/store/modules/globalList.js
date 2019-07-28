import { getMenus, getRoleNameList } from '@/api/global'
import { getRoleName } from '@/utils/auth'
import router from '@/router'

const globalList = {
  state: {
    menus: [],
    roleNameList: [],
  },
  mutations: {
    SET_MENUS: (state, payload) => {
      // 过滤一级菜单
      const oneLevel = router.options.routes.filter(item => payload.some(ele => ele === item.meta.title))
      // 过滤二级菜单
      const twoLevel = oneLevel.map((item) => {
        const rObj = Object.assign({}, item, {
          children: item.children.filter(item2 => payload.some(ele => ele === item2.meta.title)),
        })
        return rObj
      })
      state.menus = twoLevel
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
        // 过滤一级栏目
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

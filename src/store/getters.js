const getters = {
  token: (state) => state.auth.token,
  menus: (state) => state.auth.menus,
  username: (state) => state.auth.username,
  globalList: (state) => state.globalList
}

export default getters

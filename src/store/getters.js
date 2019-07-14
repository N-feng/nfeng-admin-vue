const getters = {
  token: state => state.auth.token,
  username: state => state.auth.username,
  menus: state => state.auth.menus,
}

export default getters

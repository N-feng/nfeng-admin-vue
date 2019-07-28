const getters = {
  token: state => state.auth.token,
  username: state => state.auth.username,
  globalList: state => state.globalList,
}

export default getters

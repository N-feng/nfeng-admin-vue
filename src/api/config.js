export const auth = {
  signup: '/auth/signup', // 注册
  delete: '/auth/delete', // 删除
  login: '/auth/login', // 登录
  detail: '/auth/detail', // 用户详情
  info: '/auth/info', // 用户信息
  list: '/auth/list', // 用户列表
  updateUser: '/auth/updateUser', // 修改用户
}

export const role = {
  add: '/role/add',
  update: '/role/update',
  delete: '/role/delete',
  detail: '/role/detail',
  option: '/role/option',
  list: '/role/list',
}

export const img = {
  getAuthorization: '/img/getAuthorization',
  getCdnUpload: '/img/getCdnUpload',
  getSignature: '/img/getSignature',
  getList: '/img/list',
  deleteObject: '/img/deleteObject',
}

export default {
  ...auth,
  ...role,
  ...img,
}

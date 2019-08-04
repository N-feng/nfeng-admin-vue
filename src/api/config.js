const baseUrl = '/admin'

export const global = {
  getMenus: `${baseUrl}/global/menus`,
  getRoleNameList: `${baseUrl}/global/roleNameList`,
}

export const auth = {
  authDelete: `${baseUrl}/auth/delete`, // 删除
  authUpdate: `${baseUrl}/auth/update`, // 修改用户
  authDetail: `${baseUrl}/auth/detail`, // 用户详情
  authList: `${baseUrl}/auth/list`, // 用户列表
}

export const role = {
  roleAdd: `${baseUrl}/role/add`,
  roleDelete: `${baseUrl}/role/delete`,
  roleUpdate: `${baseUrl}/role/update`,
  roleDetail: `${baseUrl}/role/detail`,
  roleList: `${baseUrl}/role/list`,
}

export const task = {
  add: `${baseUrl}/task/add`,
  delete: `${baseUrl}/task/delete`,
  update: `${baseUrl}/task/update`,
  detail: `${baseUrl}/task/detail`,
  list: `${baseUrl}/task/list`,
}

export const img = {
  imgAdd: `${baseUrl}/img/add`,
  imgList: `${baseUrl}/img/list`,
  imgDelete: `${baseUrl}/img/delete`,
}

export default {
  ...global,
  ...auth,
  ...role,
  ...img,
  ...task,
}

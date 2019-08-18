export const baseUrl = '/api'

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
  taskAdd: `${baseUrl}/task/add`,
  taskDelete: `${baseUrl}/task/delete`,
  taskUpdate: `${baseUrl}/task/update`,
  taskDetail: `${baseUrl}/task/detail`,
  taskList: `${baseUrl}/task/list`,
}

export const img = {
  imgAdd: `${baseUrl}/img/add`,
  imgList: `${baseUrl}/img/list`,
  imgDelete: `${baseUrl}/img/delete`,
}

export const note = {
  noteAdd: `${baseUrl}/note/add`,
  noteDelete: `${baseUrl}/note/delete`,
  noteUpdate: `${baseUrl}/note/update`,
  noteDetail: `${baseUrl}/note/detail`,
  noteList: `${baseUrl}/note/list`,
}

export default {
  ...global,
  ...auth,
  ...role,
  ...img,
  ...task,
  ...note,
}

export const global = {
  getMenus: '/global/menus',
  getRoleNameList: '/global/roleNameList',
}

export const auth = {
  authDelete: '/auth/delete', // 删除
  authUpdate: '/auth/update', // 修改用户
  authDetail: '/auth/detail', // 用户详情
  authList: '/auth/list', // 用户列表
}

export const role = {
  roleAdd: '/role/add',
  roleDelete: '/role/delete',
  roleUpdate: '/role/update',
  roleDetail: '/role/detail',
  roleList: '/role/list',
}

export const task = {
  taskAdd: '/task/add',
  taskDelete: '/task/delete',
  taskUpdate: '/task/update',
  taskDetail: '/task/detail',
  taskList: '/task/list',
}

export const img = {
  imgAdd: '/img/add',
  imgDelete: '/img/delete',
  imgList: '/img/list',
}

export const note = {
  noteAdd: '/note/add',
  noteDelete: '/note/delete',
  noteUpdate: '/note/update',
  noteDetail: '/note/detail',
  noteList: '/note/list',
}

export default {
  ...global,
  ...auth,
  ...role,
  ...img,
  ...task,
  ...note,
}

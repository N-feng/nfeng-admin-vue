import { post } from '@/utils/request'

export function getRoleList() {
  return post('/role/list')
}

export function getRoleOption() {
  return post('/role/option')
}

export function getRoleDetail(roleName) {
  return post('/role/detail', { roleName })
}

export function addRole(role) {
  const { roleName, roleType, roleMenu } = role
  return post('/role/add', { roleName, roleType, roleMenu })
}

export function saveRole(role) {
  const { roleName, roleType, roleMenu } = role
  return post('/role/save', { roleName, roleType, roleMenu })
}

import { post } from '@/utils/request'
import { role } from './config'

export function getRoleList() {
  return post('/role/list')
}

export function getRoleOption() {
  return post('/role/option')
}

export function getRoleDetail(roleName) {
  return post('/role/detail', { roleName })
}

export function addRole(roleData) {
  const {
    roleName, roleType, roleMenu, permissions,
  } = roleData
  console.log(role)
  return post(role.add, {
    roleName, roleType, roleMenu, permissions,
  })
}

export function updateRole(roleData) {
  const {
    roleName, roleType, roleMenu, permissions,
  } = roleData
  return post(role.update, {
    roleName, roleType, roleMenu, permissions,
  })
}

export function deleteRole(roleData) {
  const { roleName } = roleData
  return post(role.delete, { roleName })
}

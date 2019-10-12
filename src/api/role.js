import { post } from '@/utils/request'
import { role } from './config'

export function addRole(roleData) {
  const {
    roleName, roleType, roleMenu, permissions,
  } = roleData
  return post(role.roleAdd, {
    roleName, roleType, roleMenu, permissions,
  })
}

export function deleteRole(roleData) {
  const { roleName } = roleData
  return post(role.roleDelete, { roleName })
}

export function updateRole(roleData) {
  const {
    roleName, roleType, roleMenu, permissions,
  } = roleData
  return post(role.roleUpdate, {
    roleName, roleType, roleMenu, permissions,
  })
}

export function getRoleDetail(roleName) {
  return post(role.roleDetail, { roleName })
}

export function getRoleList() {
  return post(role.roleList)
}

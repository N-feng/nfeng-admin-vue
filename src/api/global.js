import { post } from '@/utils/ajax'
import { global } from '@/api/config'

export function getMenus(roleName) {
  return post(global.getMenus, { roleName })
}

export function getRoleNameList() {
  return post(global.getRoleNameList)
}

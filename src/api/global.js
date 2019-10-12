import { post } from '@/utils/ajax'
import { global } from '@/api/config'

export function getRoleNameList() {
  return post(global.getRoleNameList)
}

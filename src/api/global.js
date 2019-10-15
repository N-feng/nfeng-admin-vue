import { post } from '@/nfeng-utils/request'
import { global } from '@/api/config'

export function getRoleNameList() {
  return post(global.getRoleNameList)
}

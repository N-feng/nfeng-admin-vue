import { post } from '@/utils/request'

export function getRoleList() {
  return post('/role/list')
}

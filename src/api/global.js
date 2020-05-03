import { utils } from 'nfeng-ui-vue'
import { global } from './config'

const { post } = utils.service

export function getRoleNameList() {
  return post(global.getRoleNameList)
}

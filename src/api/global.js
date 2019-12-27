import utils from '../../../nfeng-utils'
import { global } from './config'

const { post } = utils.request

export function getRoleNameList() {
  return post(global.getRoleNameList)
}

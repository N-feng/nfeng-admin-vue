import { post } from '@/utils/ajax'
import { auth } from './config'

export function signup(username, password, roleName) {
  const url = '/auth/signup' // 注册
  const data = { username, password, roleName }
  return post(url, data)
}

export function login(username, password) {
  const url = '/auth/login' // 登录
  const data = { username, password }
  return post(url, data)
}

export function deleteAuth(authData) {
  const { username } = authData
  return post(auth.authDelete, { username })
}

export function updateUser(authData) {
  const { username, roleName } = authData
  return post(auth.authUpdate, { username, roleName })
}

export function getAuthDetail(username) {
  return post(auth.authDetail, { username })
}

export function getAuthList() {
  return post(auth.authList)
}

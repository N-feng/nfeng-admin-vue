import { post } from '@/utils/request'
import { auth } from './config'

const baseUrl = '/admin'

export function signup(username, password, roleName) {
  const url = `${baseUrl}/auth/signup` // 注册
  const data = { username, password, roleName }
  return post(url, data)
}

export function login(username, password) {
  const url = `${baseUrl}/auth/login` // 登录
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

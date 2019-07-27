import { post } from '@/utils/request'
import { auth } from './config'

export function getAuthList() {
  return post(auth.list)
}

export function getAuthDetail(username) {
  return post(auth.detail, { username })
}

export function signup(username, password, roleName) {
  const data = {
    username,
    password,
    roleName,
  }
  return post(auth.signup, data)
}

export function login(username, password) {
  const data = {
    username,
    password,
  }
  return post(auth.login, data)
}

export function deleteAuth(authData) {
  const { username } = authData
  return post(auth.delete, { username })
}

export function updateUser(authData) {
  const { username, roleName } = authData
  return post(auth.updateUser, { username, roleName })
}

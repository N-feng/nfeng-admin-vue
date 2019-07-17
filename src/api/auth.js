import { post } from '@/utils/request'
import { auth } from './config'

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

export function getAuthList() {
  return post(auth.list)
}

export function deleteAuth(authData) {
  const { username } = authData
  return post(auth.delete, { username })
}

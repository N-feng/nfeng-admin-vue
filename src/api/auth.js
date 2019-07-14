import { post } from '@/utils/request'

export function login(username, password) {
  const data = {
    username,
    password,
  }
  return post('/auth/login', data)
}

export function getMenu() {
  return post('/auth/menu')
}

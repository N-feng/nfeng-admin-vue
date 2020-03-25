import Cookies from 'js-cookie'

const TokenKey = 'Nfeng-Token'
const NameKey = 'username'
const RoleNameKey = 'roleName'

export function getToken() {
  // return localStorage.getItem(TokenKey)
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  // return localStorage.setItem(TokenKey, token)
  return Cookies.set(TokenKey, token, { sameSite: 'lax' })
}

export function removeToken() {
  // return localStorage.removeItem(TokenKey)
  return Cookies.remove(TokenKey)
}

// 缓存name
export function getName() {
  return localStorage.getItem(NameKey)
}

export function setName(name) {
  return localStorage.setItem(NameKey, name)
}

export function removeName() {
  return localStorage.removeItem(NameKey)
}

export function setRoleName(val) {
  return localStorage.setItem(RoleNameKey, val)
}

export function getRoleName() {
  return localStorage.getItem(RoleNameKey)
}

export function removeRoleName() {
  return localStorage.removeItem(RoleNameKey)
}

export default {
  getToken,
  setToken,
  removeToken,
  getName,
  setName,
  removeName
}

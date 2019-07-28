const TokenKey = 'token'
const NameKey = 'username'
const RoleNameKey = 'roleName'

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
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

const TokenKey = 'token'
const NameKey = 'username'

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

// 缓存name
export function getName() {
  return localStorage.getItem(NameKey)
}

export function setName(name) {
  return localStorage.setItem(NameKey, name)
}

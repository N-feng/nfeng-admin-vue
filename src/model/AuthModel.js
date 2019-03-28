import BaseModel from './BaseModel'
import { auth } from './apiconfig'
import { get, post } from '../nfeng-pc-vue/nfeng-service/api'
/**
 * 登录 model
 */
class AuthModel extends BaseModel {
  constructor() {
    super()
    this.url = auth
    this.avatar = ''
    this.username = ''
    this.password = ''
    this.userList = []
    this.rules = {
      username: [
        { validator: 'isNonEmpty', message: 'Please enter your username' },
      ],
      password: [
        { validator: 'isNonEmpty', message: 'Please enter your password' },
      ],
    }
  }

  login() {
    return new Promise((resolve) => {
      const url = auth.login
      const param = {
        username: this.username,
        password: this.password,
      }
      get(url, param).then((res) => {
        window.localStorage.setItem('usertoken', res.data.token)
        resolve(res)
      })
    })
  }

  logout(callback) {
    const url = this.url.logout
    const param = {}
    get(url, param).then((res) => {
      window.localStorage.removeItem('userToken')
      callback(res)
    })
  }

  register(callback) {
    const url = auth.register
    const param = {
      user: this.user,
      pass: this.pass,
    }
    post(url, param).then((res) => {
      callback(res)
    })
  }

  static delUser(param, callback) {
    console.log(param)
    const url = auth.delUser
    post(url, param).then((res) => {
      callback(res)
    })
  }

  getUserInfo() {
    const url = auth.userInfo
    get(url).then((res) => {
      const info = res.data
      this.user = info.user
      this.icon = info.icon
    })
  }

  getUserList() {
    const url = auth.userList
    get(url).then((res) => {
      this.userList = res.data
    })
  }
}

export default AuthModel

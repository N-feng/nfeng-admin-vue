import { post } from '../utils/ajax'
import { auth } from './apiconfig'
// import message from '../nfeng-pc-vue/nfeng-components/message';

function getSideList(list) {
  const arrLevelOne = []
  const arrLevelTwo = []
  // 组装一级菜单
  list.forEach((element) => {
    if (!element.parentId) {
      arrLevelOne.push(element)
    } else {
      arrLevelTwo.push(element)
    }
  })
  // 组装二级菜单
  arrLevelOne.forEach((element) => {
    element.children = []
    arrLevelTwo.forEach((item) => {
      if (element.id === item.parentId) {
        element.children.push(item)
      }
    })
  })
  return arrLevelOne
}

class AuthModel {
  constructor() {
    this.avatar = ''
    this.username = ''
    this.password = ''
    this.checkPassword = ''
    this.roleName = 'member'
    this.roleMenuList = []
    this.list = []
  }

  signup() {
    const url = auth.signup
    const param = {
      username: this.username,
      password: this.password,
      roleName: this.roleName,
    }
    return new Promise((resolve) => {
      post(url, param).then((res) => {
        resolve(res)
        // message({
        //     type: 'success',
        //     message: res.msg,
        // })
      })
    })
  }

  static delete(username) {
    const url = auth.delete
    const param = {
      username,
    }
    return new Promise((resolve) => {
      post(url, param).then((res) => {
        resolve(res)
      })
    })
  }

  login() {
    const url = auth.login
    const param = {
      username: this.username,
      password: this.password,
    }
    return new Promise((resolve) => {
      post(url, param).then((res) => {
        resolve(res)
        const info = res.data
        window.localStorage.setItem('token', info.token)
        window.localStorage.setItem('username', info.username)
        // message({
        //     type: 'success',
        //     message: res.msg,
        // })
      })
    })
  }

  static logout() {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('username')
  }

  getInfo() {
    const url = auth.info
    return new Promise((resolve) => {
      post(url).then((res) => {
        const info = res.data
        this.username = info.username
        this.roleMenuList = info.roleMenuList
        resolve(res)
      })
    })
  }

  getSideList() {
    return getSideList(this.roleMenuList)
  }

  getList() {
    const url = auth.list
    post(url).then((res) => {
      this.list = res.data
    })
  }
}

export default AuthModel

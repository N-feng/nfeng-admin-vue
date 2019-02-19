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
        this.user = ''
        this.pass = ''
        this.userList = []
        this.rules = {
            user: [
                { validator: 'isNonEmpty', message: '请输入账户' },
            ],
            pass: [
                { validator: 'isNonEmpty', message: '请输入密码' },
            ],
        }
    }

    login(callback) {
        const url = auth.login
        const param = {
            user: this.user,
            pass: this.pass,
        }
        post(url, param).then((res) => {
            window.localStorage.setItem('userToken', res.data.token)
            callback(res)
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

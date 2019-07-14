import { post } from '../utils/ajax'
import { role } from './apiconfig'

class RoleModel {
    constructor() {
        this.roleName = ''
        this.roleType = ''
        this.roleMenu = []
        this.permissions = []

        this.typeList = []
        this.sideList = []
        this.menuList = []
        this.permissionsList = []

        this.roleList = []
    }

    save() {
        const url = role.save
        const param = {
            roleName: this.roleName,
            roleType: this.roleType,
            roleMenu: this.roleMenu,
            permissions: this.permissions,
        }
        return new Promise((resolve) => {
            post(url, param).then((res) => {
                resolve(res)
            })
        })
    }

    static delete(roleName) {
        const url = role.delete
        const param = {
            roleName,
        }
        return new Promise((resolve) => {
            post(url, param).then((res) => {
                resolve(res)
            })
        })
    }

    getDetail(roleName) {
        const url = role.detail
        const param = {
            roleName,
        }
        return new Promise((resolve) => {
            post(url, param).then((res) => {
                const info = res.data
                this.roleName = info.roleName
                this.roleType = info.roleType
                this.roleMenu = info.roleMenu
                this.permissions = info.permissions
                resolve(res)
            })
        })
    }

    getOption() {
        const url = role.option
        return new Promise((resolve) => {
            post(url).then((res) => {
                const info = res.data
                this.typeList = info.typeList
                this.menuList = info.menuList
                this.permissionsList = info.permissionsList
                resolve(res)
            })
        })
    }

    static getAllPath(list) {
        const arr = []
        list.forEach((element) => {
            arr.push(element.path)
        })
        return arr
    }

    getList() {
        const url = role.list
        post(url).then((res) => {
            const info = res.data
            this.roleList = info
        })
    }
}

export default RoleModel

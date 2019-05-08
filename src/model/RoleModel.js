import { post } from '../utils/ajax';
import { role } from './apiconfig';

function getPathList(list) {
    const arr = [];
    list.forEach((element) => {
        arr.push(element.path);
    });
    return arr;
}

class RoleModel {
    constructor() {
        this.roleName = '';
        this.roleType = '';
        this.roleMenu = [];
        this.permissions = [];
        this.roleMenuList = [];

        this.typeList = [];
        this.sideList = [];
        this.menuList = [];
        this.pathList = [];

        this.roleList = [];
    }

    save() {
        this.roleMenu.forEach((item) => {
            this.menuList.forEach((el) => {
                if (item === el.path) {
                    this.roleMenuList.push(el);
                }
            });
        });
        const url = role.save;
        const param = {
            roleName: this.roleName,
            roleType: this.roleType,
            roleMenu: this.roleMenu,
            permissions: this.permissions,
            roleMenuList: this.roleMenuList,
        };
        return new Promise((resolve) => {
            post(url, param).then((res) => {
                resolve(res);
            });
        });
    }

    static delete(roleName) {
        const url = role.delete;
        const param = {
            roleName,
        };
        return new Promise((resolve) => {
            post(url, param).then((res) => {
                resolve(res);
            });
        });
    }

    getDetail(roleName) {
        const url = role.detail;
        const param = {
            roleName,
        };
        return new Promise((resolve) => {
            post(url, param).then((res) => {
                const info = res.data;
                this.roleName = info.roleName;
                this.roleType = info.roleType;
                this.roleMenu = info.roleMenu;
                this.permissions = info.permissions;
                resolve(res);
            });
        });
    }

    getOption() {
        const url = role.option;
        post(url).then((res) => {
            const info = res.data;
            this.typeList = info.typeList;
            this.menuList = info.menuList;
            this.pathList = getPathList(info.menuList);
        });
    }

    getList() {
        const url = role.list;
        post(url).then((res) => {
            const info = res.data;
            this.roleList = info;
        });
    }
}

export default RoleModel;

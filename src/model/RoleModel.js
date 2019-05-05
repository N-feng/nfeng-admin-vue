import { post } from '../utils/vue-ajax';
import { role } from './apiconfig';

function getSideList(list) {
    const arrLevelOne = [];
    const arrLevelTwo = [];
    // 组装一级菜单
    list.forEach((element) => {
        if (!element.parentId) {
            arrLevelOne.push(element);
        } else {
            arrLevelTwo.push(element);
        }
    });
    // 组装二级菜单
    arrLevelOne.forEach((element) => {
        element.children = [];
        arrLevelTwo.forEach((item) => {
            if (element.id === item.parentId) {
                element.children.push(item);
            }
        });
    });
    return arrLevelOne;
}

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
        this.permissions = '';

        this.typeList = [];
        this.sideList = [];
        this.menuList = [];
        this.pathList = [];
    }

    getList() {
        const url = role.list;
        post(url).then((res) => {
            const info = res.data;
            this.typeList = info.typeList;
            this.menuList = info.menuList;
            this.sideList = getSideList(info.menuList);
            this.pathList = getPathList(info.menuList);
        });
    }

    add() {
        console.log(this);
    }
}

export default RoleModel;

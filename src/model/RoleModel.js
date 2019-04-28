import { post } from '../utils/vue-ajax';
import { role } from './apiconfig';

function getMenuList(list) {
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

class RoleModel {
    constructor() {
        this.rolename = '';
        this.roleType = '';
        this.rolemenu = '';
        this.permissions = '';

        this.roleTypeList = [];
        this.roleMenuList = [];
        this.menuList = [];
    }

    getList() {
        const url = role.list;
        post(url).then((res) => {
            const info = res.data;
            this.roleTypeList = info.roleTypeList;
            this.roleMenuList = info.roleMenuList;
            this.menuList = getMenuList(info.roleMenuList);
        });
    }
}

export default RoleModel;

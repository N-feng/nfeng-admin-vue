import { post } from '../utils/vue-ajax';
import { menu } from './apiconfig';

class MenuModel {
    constructor() {
        this.list = [];
    }

    getMenu() {
        const url = menu.getMenu;
        post(url).then((res) => {
            const list = res.data;
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
            this.list = arrLevelOne;
        });
    }
}

export default MenuModel;

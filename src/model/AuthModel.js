import { get, post } from '../utils/vue-ajax';
import { auth } from './apiconfig';
import message from '../nfeng-pc-vue/nfeng-components/message';
/**
 * 用户 model
 */
class AuthModel {
    constructor() {
        this.avatar = '';
        this.username = '';
        this.password = '';
        this.checkPassword = '';
        this.token = '';
        this.list = [];
    }

    signup() {
        const url = auth.signup;
        const param = {
            username: this.username,
            password: this.password,
        };
        return new Promise((resolve) => {
            post(url, param).then((res) => {
                resolve(res);
                message({
                    type: 'success',
                    message: res.msg,
                });
            });
        });
    }

    login() {
        const url = auth.login;
        const param = {
            username: this.username,
            password: this.password,
        };
        return new Promise((resolve) => {
            post(url, param).then((res) => {
                resolve(res);
                const info = res.data;
                window.localStorage.setItem('token', info.token);
                message({
                    type: 'success',
                    message: res.msg,
                });
            });
        });
    }

    static logout() {
        const url = auth.logout;
        const param = {};
        post(url, param).then(() => {
            window.localStorage.removeItem('token');
        });
    }

    static delete(username) {
        const url = auth.delete;
        const param = {
            username,
        };
        return new Promise((resolve) => {
            post(url, param).then((res) => {
                resolve(res);
            });
        });
    }

    getUserInfo() {
        const url = auth.userInfo;
        get(url).then((res) => {
            const info = res.data;
            this.user = info.user;
            this.icon = info.icon;
        });
    }

    getList() {
        const url = auth.list;
        post(url).then((res) => {
            this.list = res.data;
        });
    }
}

export default AuthModel;

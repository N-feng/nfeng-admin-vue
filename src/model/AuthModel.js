import { post } from '../utils/vue-ajax';
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
        this.roleName = 'member';

        this.token = '';
        this.list = [];
    }

    signup() {
        const url = auth.signup;
        const param = {
            username: this.username,
            password: this.password,
            roleName: this.roleName,
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

    getInfo() {
        const url = auth.info;
        post(url).then((res) => {
            const info = res.data;
            this.username = info.username;
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

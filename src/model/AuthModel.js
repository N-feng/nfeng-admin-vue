import { get, post } from '../../../nfeng-utils/vue-ajax';
import { auth } from './apiconfig';
import message from '../nfeng-pc-vue/nfeng-components/message';
/**
 * 用户 model
 */
class AuthModel {
    constructor() {
        this.url = auth;
        this.avatar = '';
        this.username = '';
        this.password = '';
        this.checkPassword = '';
        this.token = '';
        this.userList = [];
    }

    signup() {
        console.log(this);
        // return new Promise((resolve) => {
        //     const url = auth.signup;
        //     const param = {
        //         username: this.username,
        //         password: this.password,
        //     };
        //     post(url, param).then((res) => {
        //         resolve(res);
        //     });
        // });
    }

    login() {
        return new Promise((resolve) => {
            const url = auth.login;
            const param = {
                username: this.username,
                password: this.password,
            };
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

    logout(callback) {
        const url = this.url.logout;
        const param = {};
        get(url, param).then((res) => {
            window.localStorage.removeItem('userToken');
            callback(res);
        });
    }

    static delUser(param, callback) {
        console.log(param);
        const url = auth.delUser;
        post(url, param).then((res) => {
            callback(res);
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

    getUserList() {
        const url = auth.userList;
        get(url).then((res) => {
            this.userList = res.data;
        });
    }
}

export default AuthModel;

import { post } from '../../../nfeng-utils/vue-ajax';
import { auth } from './apiconfig';
import message from '../nfeng-pc-vue/nfeng-components/message';

const store = {
    state: {
        authForm: {
            username: '',
            password: '',
            checkPassword: '',
            token: '',
            avatar: '',
        },
    },
    getters: {
        authForm: state => state.authForm,
    },
    mutations: {
        setAuthForm(state, payload) {
            Object.assign(state.authForm, payload);
        },
    },
    actions: {
        signup({ commit }, form) {
            return new Promise((resolve) => {
                const param = {
                    username: form.username,
                    password: form.password,
                };
                post(auth.signup, param).then((res) => {
                    resolve(res);
                    const info = res.data;
                    commit('setAuthForm', {
                        username: info.username,
                    });
                });
            });
        },
        login({ commit }, form) {
            return new Promise((resolve) => {
                const param = {
                    username: form.username,
                    password: form.password,
                };
                post(auth.login, param).then((res) => {
                    resolve(res);
                    const info = res.data;
                    commit('setAuthForm', {
                        username: info.username,
                    });
                    window.localStorage.setItem('token', info.token);
                    message({
                        type: 'success',
                        message: res.msg,
                    });
                });
            });
        },
    },
};

export default store;

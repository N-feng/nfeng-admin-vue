import ajax from './ajax';

import message from '../../nfeng-admin-vue/src/nfeng-pc-vue/nfeng-components/message';

function ajaxAction(type, url, param, resolve) {
    ajax(type, url, param, (xhr) => {
        if (xhr.status === 200) {
            const res = JSON.parse(xhr.responseText);
            if (res.code === 200) {
                resolve(res);
            } else if (res.code === 401) {
                message.error(res.msg);
                window.location.href = '/Login';
            } else {
                message.error(res.msg);
            }
        }
    });
}

function post(url, param) {
    return new Promise((resolve, reject) => {
        ajaxAction('post', url, param, resolve, reject);
    });
}

function get(url, param) {
    return new Promise((resolve, reject) => {
        ajaxAction('get', url, param, resolve, reject);
    });
}

export {
    post,
    get,
};

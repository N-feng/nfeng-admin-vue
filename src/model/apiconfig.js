export const baseUrl = '';

export const auth = {
    signup: `${baseUrl}/auth/signup`, // 注册
    delete: `${baseUrl}/auth/delete`, // 删除
    login: `${baseUrl}/auth/login`, // 登录
    info: `${baseUrl}/auth/info`, // 用户信息
    list: `${baseUrl}/auth/list`, // 用户列表
};

export const global = {
    getAuthorization: `${baseUrl}/global/getAuthorization`,
    getCdnUpload: `${baseUrl}/global/getCdnUpload`,
    getSignature: `${baseUrl}/global/getSignature`,
    getBucketList: `${baseUrl}/global/getBucketList`,
    deleteObject: `${baseUrl}/global/deleteObject`,
};

export const menu = {
    getMenu: `${baseUrl}/menu/getMenu`,
};

export const role = {
    save: `${baseUrl}/role/save`,
    delete: `${baseUrl}/role/delete`,
    detail: `${baseUrl}/role/detail`,
    option: `${baseUrl}/role/option`,
    list: `${baseUrl}/role/list`,
};

export default {
    auth,
    global,
    menu,
};

export const baseUrl = '';

export const auth = {
    login: `${baseUrl}/auth/login`, // 登录
    logout: `${baseUrl}/auth/logOut`, // 退出
    signup: `${baseUrl}/auth/signup`, // 注册
    delUser: `${baseUrl}/auth/delUser`, // 删除
    userInfo: `${baseUrl}/auth/getUserInfo`, // 用户信息
    userList: `${baseUrl}/auth/getUserList`, // 用户列表
};

export const global = {
    getAuthorization: `${baseUrl}/global/getAuthorization`,
    getCdnUpload: `${baseUrl}/global/getCdnUpload`,
    getSignature: `${baseUrl}/global/getSignature`,
    getBucketList: `${baseUrl}/global/getBucketList`,
    deleteObject: `${baseUrl}/global/deleteObject`,
};

export default {
    auth,
    global,
};

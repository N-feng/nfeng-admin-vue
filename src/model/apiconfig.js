export let baseUrl = '';

export const auth = {
    login: '/auth/login', // 登录
    register: '/auth/register', // 注册
    delUser: '/auth/delUser', // 删除
    userInfo: '/auth/getUserInfo', // 用户信息
    userList: '/admin/getUserList', // 用户列表
};

export default {
    auth
}
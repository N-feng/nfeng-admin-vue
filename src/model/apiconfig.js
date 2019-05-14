export const baseUrl = process.env.NODE_ENV === 'production' ? '/api' : ''

export const auth = {
    signup: `${baseUrl}/auth/signup`, // 注册
    delete: `${baseUrl}/auth/delete`, // 删除
    login: `${baseUrl}/auth/login`, // 登录
    info: `${baseUrl}/auth/info`, // 用户信息
    list: `${baseUrl}/auth/list`, // 用户列表
}

export const role = {
    save: `${baseUrl}/role/save`,
    delete: `${baseUrl}/role/delete`,
    detail: `${baseUrl}/role/detail`,
    option: `${baseUrl}/role/option`,
    list: `${baseUrl}/role/list`,
}

export const img = {
    getAuthorization: `${baseUrl}/img/getAuthorization`,
    getCdnUpload: `${baseUrl}/img/getCdnUpload`,
    getSignature: `${baseUrl}/img/getSignature`,
    getList: `${baseUrl}/img/list`,
    deleteObject: `${baseUrl}/img/deleteObject`,
}

export default {
    auth,
    role,
    img,
}

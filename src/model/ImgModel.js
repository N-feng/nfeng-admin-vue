import { post, get } from '../utils/ajax'
import { img } from './apiconfig'

function getBody(xhr) {
    const text = xhr.responseText || xhr.response
    if (!text) {
        return text
    }

    try {
        return JSON.parse(text)
    } catch (e) {
        return text
    }
}

/**
 * 自定义cdn上传对象
 */
class ImgModel {
    constructor() {
        this.list = []
    }

    static async getAuthorization(file) {
        const Key = `upload/${file.name}` // 这里指定上传目录和文件名，可根据情况修改
        const param = {
            Method: 'PUT',
            Key,
        }
        get(img.getAuthorization, param).then((res) => {
            console.log(res)
        })
    }

    static async getCdnUpload(file) {
        const Key = `upload/${file.name}` // 这里指定上传目录和文件名，可根据情况修改
        const param = {
            Method: 'PUT',
            Key,
        }
        get(img.getCdnUpload, param).then((res) => {
            console.log(res)
        })
    }

    static async getSignature(param) {
        return new Promise((resolve) => {
            post(img.getSignature, param).then((res) => {
                resolve(res)
            })
        })
    }

    static async uploadFile(option) {
        const Key = `upload/${option.file.name}` // 这里指定上传目录和文件名，可根据情况修改
        const param = {
            Method: 'PUT',
            Key,
        }
        this.getSignature(param).then((res) => {
            const info = res.data
            const { url, Authorization } = info
            const xhr = new XMLHttpRequest()
            xhr.open('PUT', url, true)
            xhr.setRequestHeader('Authorization', Authorization)
            xhr.setRequestHeader('x-cos-acl', 'public-read')
            xhr.onload = () => {
                option.onSuccess(getBody(xhr))
            }
            xhr.send(option.file)
        })
    }

    static async getList() {
        const param = {
            prefix: 'upload/',
        }
        return new Promise((resolve) => {
            post(img.getList, param).then((res) => {
                resolve(res)
            })
        })
    }

    static async deleteObject(file) {
        const param = {
            Key: `upload/${file.name}`,
        }
        return get(img.deleteObject, param)
    }
}

export default ImgModel

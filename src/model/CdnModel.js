import { global } from './apiconfig'
import { post, get } from '../nfeng-pc-vue/nfeng-service/api'

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
class cdn {
    static async getAuthorization(file) {
        const Key = `upload/${file.name}` // 这里指定上传目录和文件名，可根据情况修改
        const param = {
            Method: 'PUT',
            Key: Key,
        }
        get(global.getAuthorization, param).then((res) => {
            console.log(res)
        })
    }

    static async getCdnUpload(file) {
        const Key = `upload/${file.name}` // 这里指定上传目录和文件名，可根据情况修改
        const param = {
            Method: 'PUT',
            Key: Key,
        }
        get(global.getCdnUpload, param).then((res) => {
            console.log(res)
        })
    }

    static async getSignature(param) {
        return new Promise((resolve) => {
            post(global.getSignature, param).then((res) => {
                resolve(res)
            })
        })
    }

    static async uploadFile(option) {
        const Key = `upload/${option.file.name}` // 这里指定上传目录和文件名，可根据情况修改
        const param = {
            Method: 'PUT',
            Key: Key,
        }
        this.getSignature(param).then((res) => {
            const info = res.data
            const { url, Authorization } = info
            const xhr = new XMLHttpRequest()
            xhr.open('PUT', url, true)
            xhr.setRequestHeader('Authorization', Authorization)
            xhr.setRequestHeader('x-cos-acl', 'public-read')
            xhr.onload = function () {
                option.onSuccess(getBody(xhr))
            }
            xhr.send(option.file)
        })
    }

    static async getBucketList() {
        const param = {
            Prefix: 'upload/',
        }
        return new Promise((resolve) => {
            get(global.getBucketList, param).then((res) => {
                resolve(res)
            })
        })
    }

    static async deleteObject(file) {
        const param = {
            Key: `upload/${file.name}`,
        }
        return get(global.deleteObject, param)
    }
}

export default cdn

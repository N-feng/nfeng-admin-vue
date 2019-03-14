const fs = require('fs')
const request = require('request')
const http = require('http')
const qs = require('querystring')

/**
 * 上传文件函数
 * @param {*} path 文件路径
 * @param {*} url 上传地址
 * @param {*} Authorization 上传凭证
 */
function putFile(path, url, Authorization) {
    fs.readFile(path, (err, data) => {
        const options = {
            method: 'PUT',
            url: url,
            headers: {
                Authorization: Authorization,
                'x-cos-acl': 'public-read',
            },
            body: data,
        }
        request(options, () => {
            console.log(`${path} 上传成功!`)
        })
    })
}

/**
 * 获取签名函数
 * @param {*} option 参数
 */
function uploadFile(option) {
    const Key = option.name // 这是需要提交的数据
    const param = {
        Method: 'PUT',
        Key: Key,
    }
    const content = qs.stringify(param)

    const options = {
        hostname: 'nfeng.net.cn',
        port: 80,
        path: '/global/getSignature',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
    }

    const req = http.request(options, (res) => {
        // console.log(`STATUS:${res.statusCode}`)
        // console.log(`HEADRES:${JSON.stringify(res.headers)}`)
        res.setEncoding('utf8')
        res.on('data', (chunk) => {
            const info = JSON.parse(chunk).data
            const { url, Authorization } = info
            putFile(Key, url, Authorization)
        })
    })

    req.on('error', (e) => {
        console.log(`problem with request:${e.message}`)
    })

    // write data to request body
    req.write(content)

    req.end()
}

/**
 * 获取文件地址函数
 * @param {*} filePath 文件路径
 * @param {*} callback 回调函数
 */
function getFilePath(filePath, callback) {
    fs.stat(filePath, (err, data) => {
        // 判断是否是文件
        if (data.isFile()) {
            // 是文件
            callback()
        }
    })
}

/**
 * 读取文件夹路径 所有文件
 * @param {*} dirPath 文件夹路径
 */
function getFile(dirPath) {
    fs.readdir(dirPath, (err, data) => {
        data.forEach((item) => {
            const filePath = dirPath + item
            getFilePath(filePath, () => {
                const option = {
                    name: filePath,
                }
                uploadFile(option)
            })
        })
    })
}

getFile('dist/')
getFile('dist/css/')
getFile('dist/js/')

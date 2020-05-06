import Axios from 'axios'
import {
  message,
} from 'ant-design-vue'

function showError(msg) {
  message.error(msg)
}

// 统一对返回结果做处理
const checkCode = (data) => {
  // console.log(data)
  if (data.code === 401) {
    // 401屏蔽错误提示
    // if (data.message || data.msg) {
    //   const msg = data.message || data.msg
    //   showError(msg)
    // }
    return window.myBus.emit('login')
  }
  // if (data.code >= 200 || data.code < 300) {
  //   return data
  // }
  if (data.code === 200 || data.code === 201) {
    return data
  }
  if (data.message || data.msg) {
    const msg = data.message || data.msg
    if (data.code !== 498) {
      showError(msg)
    }
  }
  return Promise.reject(data)
}

Axios.interceptors.response.use((res) => checkCode(res.data), (err) => checkCode(err.response.data))

function getHeaders() {
  const headers = {
    // 'If-Modified-Since': '0',
    // 'x-sec-profile': window.localStorage.getItem('selectedChannel') || ''
  }
  if (window.localStorage.getItem('userContext')) {
    const userContext = JSON.parse(window.localStorage.getItem('userContext'))
    if (userContext.lvl1SubjectId) {
      return {
        ...headers,
        'x-sec-subject-app-id': userContext.subjectId,
        'x-sec-subject-app-name': encodeURI(userContext.subjectName),
        'x-sec-lvl1subject-app-id': userContext.lvl1SubjectId,
        'x-sec-vlv1subject-app-name': encodeURI(userContext.lvl1SubjectName),
      }
    }
    return {
      ...headers,
      'x-sec-subject-company-id': userContext.subjectId,
      'x-sec-subject-company-name': encodeURI(userContext.subjectName),
    }
  }
  return headers
}

// if (userContext) {
//   userContext = JSON.parse(userContext)
//   if (userContext.lvl1SubjectId) {
//     Object.assign(headers, {
//       'x-sec-subject-app-id': userContext.subjectId,
//       'x-sec-subject-app-name': encodeURI(userContext.subjectName),
//       'x-sec-lvl1subject-app-id': userContext.lvl1SubjectId,
//       'x-sec-vlv1subject-app-name': encodeURI(userContext.lvl1SubjectName),
//     })
//   } else {
//     Object.assign(headers, {
//       'x-sec-subject-company-id': userContext.subjectId,
//       'x-sec-subject-company-name': encodeURI(userContext.subjectName),
//     })
//   }
// }

const get = (url, params) => Axios({
  url,
  method: 'get',
  params: {
    ...params,
    t: parseInt(Math.random() * 100000, 10),
  },
  headers: getHeaders(),
})

const post = (url, data) => Axios({
  url,
  method: 'post',
  params: {
    // t: parseInt(Math.random() * 100000, 10),
  },
  data,
  headers: getHeaders(),
})

export default {
  install(Vue) {
    Vue.prototype.$get = get
    Vue.prototype.$post = post
  },
}

export {
  get,
  post,
}

// 深拷贝
export function deepCopy(obj) {
  const result = Array.isArray(obj) ? [] : {}
  Object.keys(obj).forEach((item) => {
    if (typeof obj[item] === 'object' && obj[item] !== null) {
      result[item] = deepCopy(obj[item]) // 递归复制
    } else {
      result[item] = obj[item]
    }
  })
  return result
}

// 防抖，函数在300毫秒内触发就停掉定时器，只有在300毫秒后触发才会执行回调
export function debounce(callback, delay = 300) {
  let t = null
  return function thr() {
    clearTimeout(t)
    t = setTimeout(callback, delay)
  }
}

// 限流，函数只有在前后两次的时间大于500毫秒触发才会执行回调
export function throttle(callback, duration = 500) {
  let lastTime = new Date().getTime()
  return function thr() {
    const now = new Date().getTime()
    if (now - lastTime > duration) {
      callback()
      lastTime = now
    }
  }
}

// 获取浏览器信息
export function getBrowserInfo() {
  const sys = {}
  const ua = navigator.userAgent.toLowerCase()
  const re = /(msie|firefox|chrome|opera|version|rv).*?([\d.]+)/
  const m = ua.match(re)
  sys.browser = m[1].replace(/version/, "'safari")
  // 兼容IE11
  sys.browser = m[1].replace(/rv/, "'msie")
  // eslint-disable-next-line prefer-destructuring
  sys.ver = m[2]
  return sys
}

export default {
  deepCopy, debounce, throttle, getBrowserInfo,
}

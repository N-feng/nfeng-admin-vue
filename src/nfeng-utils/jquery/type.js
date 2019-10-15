// 这个对象是用来将 toString 函数返回的字符串转成
import { class2type } from './var'

const { toString } = Object.prototype

export default function type(obj) {
  if (obj == null) {
    return `${obj}`
  }
  return typeof obj === 'object' || typeof obj === 'function'
    ? class2type[toString.call(obj)] || 'object'
    : typeof obj
}

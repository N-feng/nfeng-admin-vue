import { class2type } from './var'

const getProto = Object.getPrototypeOf // 获取父对象
const hasOwn = class2type.hasOwnProperty
const fnToString = hasOwn.toString
const ObjectFuntionString = fnToString.call(Object)

// 判断数据类型
// 判断是否为纯正的数据对象
export default function isPlainObject(obj) {
  // 排除 undefined、null 和 非 object 情况
  if (!obj || toString.call(obj) !== '[object Object]') {
    return false
  }

  const proto = getProto(obj)

  // Objects with no prototype (e.g., `Object.create(null)`) are plain
  if (!proto) {
    return true
  }

  // Objects with prototype are plain if they were constructed by a global Object function
  const Ctor = hasOwn.call(proto, 'constructor') && proto.constructor
  return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFuntionString
}

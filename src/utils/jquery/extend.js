import isFunction from './isFunction'
import isPlainObject from './isPlainObject'

export default function extend(...args) {
  let target = args[0] || {}
  let i = 1
  const { length } = args
  let deep = false // 默认为浅拷贝

  // 判断是否为深拷贝
  if (typeof target === 'boolean') {
    deep = target
    // 参数后移
    target = args[i] || {}
    i += 1
  }

  // 处理 target 是字符串或奇怪的情况，isFunction(target) 可以判断 target 是否为函数
  if (typeof target !== 'object' && isFunction(target)) {
    target = {}
  }

  // 如果只传入了一个参数，表示是jquery静态方法，直接返回自身
  if (i === length) {
    target = this
    i -= 1
  }

  for (; i < length; i += 1) {
    // 被拷贝的对象
    const options = args[i]
    // null/undefined 判断
    if (options !== null) {
      // 这里已经统一了，无论前面函数的参数怎样，现在的任务就是 target 是目标对象，options 是被拷贝对象
      Object.keys(options).forEach((name) => {
        const src = target[name] // 获得源对象的值
        const copy = options[name] // 获得拷贝对象的值
        // 说是为了避免无限循环，例如 extend(true, 'target', {'target':target})
        if (target !== copy) {
          // 深拷贝，且被拷贝对象是 object 或 array
          // 这是深拷贝的重点
          // 如果是数据正确，且是一个纯粹的对象（纯粹的对象指的是 通过 “{}” 或者 "new Object" 创建的）或者是一个数组的话
          let copyIsArray = Array.isArray(copy) // 判断是否为数组
          if (deep && copy && (isPlainObject(copy) || copyIsArray)) {
            let clone // 返回拷贝的内容
            // 如果是一个数组的话
            if (copyIsArray) {
              copyIsArray = false
              clone = src && Array.isArray(src) ? src : [] // 判断原对象属性是否有值，如果有的话，直接返回原值，否则新建一个空对象
              // 被拷贝对象是 object
            } else {
              clone = src && isPlainObject(src) ? src : {}
            }

            // 继续深拷贝下去
            target[name] = extend(deep, clone, copy)

            // 常规变量，直接 =
          } else if (copy !== undefined) {
            // 如果不为空，则不是需要深拷贝的数据和对象，而是string，data，boolean等等，可以直接赋值
            target[name] = copy
          }
        }
      })
    }
  }

  // 返回新的拷贝完的对象
  return target
}

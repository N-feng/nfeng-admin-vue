import isFunction from './isFunction'
import isPlainObject from './isPlainObject'

console.log(isPlainObject({}))// true
// console.log(isPlainObject({ a: 1 }))// true
// console.log(isPlainObject(new Object()))// true

// console.log(isPlainObject([]))// false
// console.log(isPlainObject(new String('a')))// false
// console.log(isPlainObject(() => { }))// false
// console.log(isPlainObject)

export default function extend(...args) {
  /**
   * copyIsArray // 判断是否为数组
   * clone // 返回拷贝的内容
   */
  let target = args[0] || {}
  let i = 1
  const { length } = args
  let deep = false // 默认为浅拷贝

  // target 是传入的第一个参数，表示是否要深递归
  if (typeof target === 'boolean') {
    deep = target
    // 既然为boolean，则此处初始化target为第二个参数或者空对象
    target = args[i] || {}
    // 如果穿了类型为 boolean 的第一个参数，i 则从 2 开始
    i += 1
  }

  // 如果传入的第一个参数不是对象或者其他，初始化为一个空对象
  if (typeof target !== 'object' && isFunction(target)) {
    target = {}
  }
  // 如果只传入了一个参数，表示是jquery静态方法，直接返回自身
  if (i === length) {
    target = this
    i -= 1
  }
  for (; i < length; i += 1) {
    const options = args[i] // 被拷贝的对象
    if (options !== null) {
      Object.keys(options).forEach((name) => {
        // const src = target[name] // 获得源对象的值
        const copy = options[name] // 获得拷贝对象的值
        // 说是为了避免无限循环，例如 extend(true, 'target', {'target':target})
        if (target !== copy) {
          // 如果是数据正确，且是一个纯粹的对象（纯粹的对象指的是 通过 “{}” 或者 "new Object" 创建的）或者是一个数组的话
          // isPlainObject(copy)
          if (deep && copy) {
            console.log('222')
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

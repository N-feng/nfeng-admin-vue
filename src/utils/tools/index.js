// export function deepClone(obj) {
//   const newObj = Array.isArray(obj) ? [] : {}
//   if (obj && typeof obj === 'object') {
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         newObj[key] = (obj && typeof obj[key] === 'object') ? deepClone(obj[key]) : obj[key]
//       }
//     }
//   }
//   return newObj
// }

// 深拷贝
// function deepCopy(obj) {
//   const result = Array.isArray(obj) ? [] : {}
//   Object.keys(obj).forEach((item) => {
//     if (typeof obj[item] === 'object' && obj[item] !== null) {
//       result[item] = deepCopy(obj[item]) // 递归复制
//     } else {
//       result[item] = obj[item]
//     }
//   })
//   return result
// }

// export function deepCopy(p, c) {
//   c = c || {}
//   for (const i in p) {
//     if (p.hasOwnProperty(i)) {
//       if (typeof p[i] === 'object') {
//         c[i] = Array.isArray(p[i]) ? [] : {}
//         deepCopy(p[i], c[i])
//       } else {
//         c[i] = p[i]
//       }
//     }
//   }
//   return c
// }

// function extend() {
//   // jquery喜欢在初始定义好所有的变量
//   let options; let //  被拷贝的对象
//     name; let // 遍历时的属性
//     src; let // 返回对象本身的属性值
//     copy; let // 需要拷贝的内容
//     copyIsArray; let //  判断是否为数组
//     clone; let // 返回拷贝的内容
//     target = arguments[0] || {}


//   let i = 1


//   const length = arguments.length


//   let deep = false// 默认为浅拷贝

//   // target 是传入的第一个参数,表示是否要深递归
//   if (typeof target === 'boolean') {
//     deep = target
//     // 既然为boolean，则此处初始化target为第二个参数或者空对象
//     target = arguments[i] || {}
//     // 如果传了类型为 boolean 的第一个参数，i 则从 2 开始
//     i++
//   }

//   // 如果传入的第一个参数不是对象或者其他，初始化为一个空对象
//   if (typeof target !== 'object' && $.isFunction(target)) {
//     target = {}
//   }
//   // 如果只传入了一个参数，表示是jquery静态方法，直接返回自身
//   if (i === length) {
//     target = this
//     i--
//   }
//   for (; i < length; i++) {
//     if ((options = arguments[i]) !== null) {
//       for (name in options) {
//         src = target[name]// 获得源对象的值
//         copy = options[name]// 获得要拷贝对象的值
//         // 说是为了避免无限循环，例如 extend(true, target, {'target':target});
//         if (target === copy) continue
//         // 如果是数据正确，且是一个纯粹的对象（纯粹的对象指的是 通过 "{}" 或者 "new Object" 创建的）或者是一个数组的话
//         if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
//           // 如果是一个数组的话
//           if (copyIsArray) {
//             copyIsArray = false
//             clone = src && Array.isArray(src) ? src : []// 判断原对象属性是否有值，如果有的话，直接返回原值，否则新建一个空对象
//           } else {
//             clone = src && $.isPlainObject(src) ? src : {}
//           }
//           // 继续深拷贝下去
//           target[name] = $.extend(deep, clone, copy)
//         } else if (copy !== undefined) {
//           // 如果不为空，则不是需要深拷贝的数据和对象，而是string,data,boolean等等，可以直接赋值
//           target[name] = copy
//         }
//       }
//     }
//   }
//   // 返回新的拷贝完的对象
//   return target
// }

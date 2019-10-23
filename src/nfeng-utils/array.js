// const a = [1,2,3]
// const b = [2,4,5]

// 并集 [1,2,3,4,5]
export function union(a, b) {
  return Array.from(new Set(a.concat(b)))
}

// 交集 [2]
export function intersection(a, b) {
  const bSet = new Set(b)
  return Array.from(new Set(a.filter(v => bSet.has(v))))
}

// 差集 [1,3]
export function differenceNew(a, b) {
  const aSet = new Set(a)
  const bSet = new Set(b)
  // 差集
  return Array.from(new Set(a.concat(b).filter(v => aSet.has(v) && !bSet.has(v))))
}

// 对象数组去重
export function removeDuplicate(arr, key) {
  const obj = {}
  const target = []
  arr.forEach((item) => {
    if (!obj[item[key]]) {
      target.push(item)
      obj[item[key]] = item
    }
  })
  return target
}

export default {
  union, intersection, differenceNew, removeDuplicate,
}

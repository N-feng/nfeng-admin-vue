import type from './type'

export default function isFunction(obj) {
  return type(obj) === 'function'
}

import './scss/index.scss'
import tool from './tool'
import tree from './tree'
import array from './array'
import jquery from './jquery'

const utils = {
  tool,
  tree,
  array,
  jquery,
}

function install(Vue) {
  Vue.prototype.$tool = tool
  Vue.prototype.$tree = tree
  Vue.prototype.$utils = utils
  Vue.prototype.$jquery = jquery
  Vue.prototype.$array = array
}

/* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export default {
  tool,
  tree,
  array,
  jquery,
  // utils,
  install,
}

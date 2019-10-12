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
  Vue.prototype.$utils = utils
}

/* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export default {
  utils,
  install,
}

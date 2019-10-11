import './scss/index.scss'
// import tools from './tools/index'
import jquery from './jquery'

const utils = {
  // tools,
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

import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './permission' // 权限控制
import NfengUI from '@aygtech/hm-ui'
import './assets/scss/index.scss'
// import { filter } from '../../nfeng-utils'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
// import Api, { get, post } from './nfeng-utils/request'
// import 'nfeng-scss/index.scss'

console.log(NfengUI)
Vue.use(Antd)
Vue.use(components)
Vue.use(NfengUI)
// Vue.prototype.$get = get
// Vue.prototype.$post = post
// Vue.prototype.$api = Api

Vue.config.productionTip = false
// filter注册
// Vue.filter('timeTransfer', filter.timeTransfer)

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})

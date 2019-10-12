import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './permission' // 权限控制
// import utils from 'nfeng-utils'
import utils from './utils'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
import Api, { get, post } from './utils/request'
import { timeTransfer } from './utils/filter'
// import 'nfeng-scss/index.scss'

Vue.use(Antd)
Vue.use(components)
Vue.use(utils)
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$api = Api

Vue.config.productionTip = false
// filter注册
Vue.filter('timeTransfer', timeTransfer)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})

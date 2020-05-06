import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './utils/permission' // 权限控制
import NfengUI from 'nfeng-ui-vue'
import './style/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
import { get, post } from './utils/request'
import bus from './utils/bus'

Vue.prototype.$get = get
Vue.prototype.$post = post

Vue.use(Antd)
Vue.use(components)
Vue.use(NfengUI)

window.myBus = bus
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
})

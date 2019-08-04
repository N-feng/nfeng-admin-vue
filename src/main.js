import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './permission' // 权限控制
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
import Api, { get, post } from './utils/request'

Vue.use(Antd)
Vue.use(components)
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$api = Api

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})

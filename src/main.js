import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './permission' // 权限控制
import NfengUI from 'nfeng-ui-vue'
import './assets/style/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
// import 'nfeng-scss/index.scss'

Vue.use(Antd)
Vue.use(components)
Vue.use(NfengUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})

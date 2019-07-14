import Vue from 'vue'
import Antd from 'ant-design-vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'ant-design-vue/dist/antd.css'
import '@/assets/scss/index.scss'
// import './assets/less/index.less'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
// import nfUi from './nfeng-pc-vue/nfeng-components'
import './filter'

Vue.use(ElementUI)
Vue.use(Antd)
Vue.use(components)
// Vue.use(nfUi)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})

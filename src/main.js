import Vue from 'vue'
import vueNcform from '@ncform/ncform'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ncformStdComps from '@ncform/ncform-theme-elementui'
import axios from 'axios'

// import MyCustomComp from './components/MyCustomComp.vue' // Your custom form widget
// import MyCustomRule from './rules/MyCustomRule' // Your custom rule

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './utils/permission' // 权限控制
import NfengUI, { pcComps, utils } from 'nfeng-ui-vue'
import './style/index.scss'
import App from './App.vue'
import router from './router'
// import store from './store'
import bus from './utils/bus'

const { get, post } = utils
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$http = axios

Vue.use(Element)
Vue.use(vueNcform, {
  extComponents: Object.assign(ncformStdComps, pcComps),
  // extRules: [{ myCustom: MyCustomRule }],
  lang: 'zh_cn', // you can try 'en' or 'zh-cn'
})
Vue.use(Antd)
Vue.use(NfengUI)

window.myBus = bus
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  // store,
  render: (h) => h(App),
})

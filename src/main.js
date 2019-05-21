import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
import nfUi from './nfeng-pc-vue/nfeng-components'
import './filter'

Vue.use(ElementUI)
Vue.use(components)
Vue.use(nfUi)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})

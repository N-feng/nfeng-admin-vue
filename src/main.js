import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import nfUi from './nfeng-pc-vue/nfeng-components'
Vue.use(nfUi);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

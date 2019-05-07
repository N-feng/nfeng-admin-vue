import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import nfUi from './nfeng-pc-vue/nfeng-components';
import './filter';

Vue.use(nfUi);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins";

import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  // 你需要在这里使用绝对路径
  uri: 'http://localhost:3009/graphql'
})

import VueApollo from 'vue-apollo'

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider,
  store,
  render: (h) => h(App),
}).$mount("#app");

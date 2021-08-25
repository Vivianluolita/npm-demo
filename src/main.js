import Vue from 'vue'
import App from './App.vue'
// import vpay from './lib/vpay'
// Vue.use(vpay);
// 直接引入vpay,不需要写路径
import vpay from 'vpay'

Vue.use(vpay);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

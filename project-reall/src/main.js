import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'jquery'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
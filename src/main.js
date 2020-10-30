import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import "./assets/base.css"
import "./assets/index.css"

Vue.directive('focus', {
  inserted(el, binding) { 
    el.focus()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


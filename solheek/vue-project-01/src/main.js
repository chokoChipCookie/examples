import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// application 진입점, App.vue를 바라보게 만듦
new Vue({
  render: h => h(App),
}).$mount('#app')

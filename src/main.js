import Vue from 'vue'
import App from './App.vue'
import VueTailwind from 'vue-tailwind'

const components = {
  //...
}

Vue.use(VueTailwind, components)

Vue.config.productionTip = false

import './assets/main.css'

new Vue({
  render: h => h(App),
}).$mount('#app')

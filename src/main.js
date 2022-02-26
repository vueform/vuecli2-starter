import './assets/main.css'

import Vue from 'vue'
import CompositionAPI from '@vue/composition-api'
import Vueform from '@vueform/vueform/plugin'
import vueformConfig from './../vueform.config'

import App from './App.vue'

Vue.use(CompositionAPI)
Vue.use(Vueform, vueformConfig)

new Vue({
  render: h => h(App),
}).$mount('#app')

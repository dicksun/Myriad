import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { MdButton, MdContent, MdTabs,MdApp } from 'vue-material/dist/components'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(BootstrapVue)
Vue.use(MdApp)
Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

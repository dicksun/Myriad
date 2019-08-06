import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { MdButton, MdContent, MdTabs,MdApp } from 'vue-material/dist/components'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { library,dom } from '@fortawesome/fontawesome-svg-core'
import { faCircle,faShoppingCart,faLaptop,faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCircle,faShoppingCart,faLaptop,faLock)

Vue.component('font-awesome-icon', FontAwesomeIcon)
dom.watch() 


Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(BootstrapVue)
Vue.use(MdApp)
Vue.use(VueMaterial)

Vue.config.productionTip = false
window.Vue = Vue;
new Vue({
  render: h => h(App),
}).$mount('#app')


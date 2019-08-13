import Vue from 'vue'
import App from './App.vue'
import VueSlideUpDown from 'vue-slide-up-down'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSortDown, faUser, faBell, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSortDown, faUser, faBell, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-slide-up-down', VueSlideUpDown)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

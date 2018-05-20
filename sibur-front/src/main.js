// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import Vuetify from 'vuetify'
//
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
//
// Vue.use(Vuetify)

import BootstrapVue from 'bootstrap-vue'

// import './styles/custom+bootstrap.scss'
// import './styles/custom-bootstrap.scss'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import http from './http'
import Vuex from 'vuex'
import storeCreate from '../store/store'

Vue.use(Vuex)

Vue.prototype.$http=http
Vue.config.productionTip = false

Vue.mixin({
  methods:{
    getHeaders(){
      return {
        Authorization:`Bearer ${localStorage.token|| ''}`
      }
    }
  },
})


const store=storeCreate()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

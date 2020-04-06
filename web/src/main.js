import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'

import '../src/assets/scss/style.scss'
import './plugins/element.js'

//swiper 组件引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
//引入结束 

// my component
import Banner from './components/Banner'
Vue.component('banner',Banner)
import Card from './components/Card'
Vue.component('card',Card)

import Charts from './components/Charts'
Vue.component('my-charts',Charts)

import echarts from "echarts";
Vue.prototype.$echarts = echarts;
import axios from 'axios'
Vue.prototype.$http=axios.create({
  baseURL:"http://localhost:3000/web/api"
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

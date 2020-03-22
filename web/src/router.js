import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Hero from './views/Hero/Hero.vue'
import HeroList from './views/Hero/HeroList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path:'/Hero',
          name:'hero',
          component:Hero,
          // props:true
        },{
          path:'/HeroList',
          name:'herolist',
          component:HeroList
        }
      ]
    },
  ]
})

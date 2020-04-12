import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Hero from './views/Hero/Hero.vue'
import HeroList from './views/Hero/HeroList.vue'
import News from './views/Article/News'
import ArticleList from './views/Article/ArticleList'
import Article from './views/Article/Article'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[

      ]
    },
    {
      path:'/Article/list',
      component:ArticleList
    },
    {
      path:'/Article/:id',
      props:true,
      component:Article
    },
    {
      path:'/News/:id',
      props:true,
      component:News
    },
    {
      path:'/Hero/:id',
      name:'hero',
      component:Hero,
      props:true
    },{
      path:'/HeroList',
      name:'herolist',
      component:HeroList
    }
  ]
})

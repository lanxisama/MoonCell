import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import CategoryEdit from './views/Category/CategoryEdit'
import CategoryList from './views/Category/CategoryList'

import ItemEdit from './views/Item/ItemEdit'
import ItemList from './views/Item/ItemList'
import HeroEdit from './views/Hero/HeroEdit'
import HeroList from './views/Hero/HeroList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:Home,
      component:Home,
      redirect:'/items/list',
      children:[
        {
          path:"/categories/create",
          component:CategoryEdit
        },
        {
          path:"/categories/list",
          component:CategoryList
        },
        {
          path:"/categories/edit/:id",
          component:CategoryEdit,
          props:true
        },
        //-----------------
        {
          path:"/items/create",
          component:ItemEdit
        },
        {
          path:"/items/list",
          component:ItemList
        },
        {
          path:"/items/edit/:id",
          component:ItemEdit,
          props:true
        },
        //-----------------
        {
          path:"/heroes/create",
          component:HeroEdit
        },
        {
          path:"/heroes/list",
          component:HeroList
        },
        {
          path:"/heroes/edit/:id",
          component:HeroEdit,
          props:true
        },
        //-----------------
    ]
    },
  ]
})

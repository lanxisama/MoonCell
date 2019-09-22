import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import CategoryEdit from './views/Category/CategoryEdit'
import CategoryList from './views/Category/CategoryList'

import ItemEdit from './views/Item/ItemEdit'
import ItemList from './views/Item/ItemList'

import HeroEdit from './views/Hero/HeroEdit'
import HeroList from './views/Hero/HeroList'

import NewsEdit from './views/News/NewsEdit'
import NewsList from './views/News/NewsList'

import ArticleEdit from './views/Article/ArticleEdit'
import ArticleList from './views/Article/ArticleList'

import AdminUserEdit from './views/AdminUser/AdminUserEdit'
import AdminUserList from './views/AdminUser/AdminUserList'

import Login from './views/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      name:'login',
      component:Login
    },
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
        {
          path:"/news/create",
          component:NewsEdit
        },
        {
          path:"/news/list",
          component:NewsList
        },
        {
          path:"/news/edit/:id",
          component:NewsEdit,
          props:true
        },
        //-----------------
        {
          path:"/article/create",
          component:ArticleEdit
        },
        {
          path:"/article/list",
          component:ArticleList
        },
        {
          path:"/article/edit/:id",
          component:ArticleEdit,
          props:true
        },
        //-----------------
        {
          path:"/admin_user/create",
          component:AdminUserEdit
        },
        {
          path:"/admin_user/list",
          component:AdminUserList
        },
        {
          path:"/admin_user/edit/:id",
          component:AdminUserEdit,
          props:true
        },
        //-----------------
    ]
    },
  ]
})

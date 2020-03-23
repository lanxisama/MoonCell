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

import BannerEdit from './views/Banner/BannerEdit'
import BannerList from './views/Banner/BannerList'
import Login from './views/Login'
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path:'/login',
      name:'login',
      component:Login,
      meta:{isPublic:true}
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
          component:AdminUserEdit,
          
        },
        {
          path:"/admin_user/list",
          component:AdminUserList,
        
        },
        {
          path:"/admin_user/edit/:id",
          component:AdminUserEdit,
          props:true,
          
        },
        //-----------------
        {
          path:"/banner/create",
          component:BannerEdit,
          
        },
        {
          path:"/banner/list",
          component:BannerList,
        
        },
        {
          path:"/banner/edit/:id",
          component:BannerEdit,
          props:true,
          
        },
    ]
    },
  ]
})

router.beforeEach((to,from,next)=>{
  
  if(!to.meta.isPublic && !localStorage.token)
  {
    return next('/login')
  }
  if(to.path.indexOf('admin_user')!=-1 && localStorage.adminType==1){
    console.log(from.path)
    //说明访问的是和权限相关的东西 
    Vue.prototype.$message({
      type:'error',
      message:'对不起，你没有权限'
    })
    return next(from.path)

    
  }
  next()
})

export default router
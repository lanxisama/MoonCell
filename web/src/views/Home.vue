<template>
  <div class="home">
   <el-drawer
      title="我是标题"
      direction="ltr"
      :visible.sync="drawer"
      :with-header="false"
    >
    <div>
        <p class="mt-3">/Home 里面</p>
    </div>
    </el-drawer>
    <div class="topbar bg-primary py-2 px-3 text-light-blue d-flex ai-center ">
      <img src="../assets/logo.png" height="25" @click="drawer = true">
      <div class="px-2 flex-1">
        <div class="text-dark-blue">Mooncell</div>
      </div>
      <el-dropdown size="small" class="jc-end">
          <span class="el-dropdown-link">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/Hero" tag="div">Hero</router-link>
              </el-dropdown-item>
            <el-dropdown-item divided>
              <router-link to="/HeroList">HeroList</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
    </el-dropdown>
    </div>
    <div class="nav">
      <!-- nav -->
      <banner :bannerList='banners'></banner>
      <div>
        <!-- <div>
          <swiper>
            <swiper-slide v-for="(item,index) in news" :key="index">
              <p class="my-1">{{item.title}}</p>
            </swiper-slide>
          </swiper>
        </div> -->

        <div class="nav-list mt-3 ml-3 d-flex space-between">
              <div class="nav-item">
                 <router-link tag="div" to="/HeroList">
                  <div class="circle d-flex jc-center ai-center">
                   <svg t="1585627497902" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20761" width="200" height="200"><path d="M344.626 600.536c8.607-3.256 19.065-6.233 31.491-14.042 18.109-11.379 32.062-34.843-1.603-63.595C263.13 362.397 303.671 255.754 320.59 215.582c-14.133-5.496-30.208-8.747-48.608-8.747l-5.787 0c-106.593 0-134.923 96.947-137.085 151.323-1.43 128.215 76.955 179.192 76.955 179.192s4.883 6.742 4.883 26.297c0 4.458-2.906 17.813-7.921 21.847C159.275 620.924 13.24 657.835 3.035 734.159c-5.395 22.053-2.168 44.959-1.106 66.186 23.896 18.349 100.454 33.905 100.454 33.905s6.356-19.31 12.808-51.222C124.727 735.857 188.548 659.521 344.626 600.536L344.626 600.536zM1021.191 733.488c-10.484-76.229-160.407-113.09-205.271-148.474-5.151-4.033-8.11-17.367-8.11-21.813 0-19.539 4.972-26.27 4.972-26.27s80.384-50.909 78.882-178.961c-2.191-54.311-36.079-151.135-140.477-151.135l-0.006 0-5.931 0c-22.504 0-41.425 4.278-57.578 11.272 22.338 74.782 49.177 212.002-63.755 303.96-44.306 66.052 103.281 104.794 80.341 94.485C837.807 676.57 873.75 722.614 883.537 770.22c8.172 39.733 12.808 64.031 12.808 64.031s100.058-15.272 125.936-34.66C1023.397 778.387 1026.703 755.513 1021.191 733.488L1021.191 733.488zM585.685 587.176c-6.312-5.016-9.943-21.612-9.943-27.136 0-24.28 6.077-32.626 6.077-32.626-0.111 0.072 98.734-53.379 96.79-222.424-2.692-67.509-44.256-187.833-172.348-187.833l-0.018 0-7.267 0c-134.018 0-169.661 120.323-172.366 187.833-1.809 159.138 96.768 222.424 96.768 222.424s11.954 13.634 11.954 37.916c0 5.53-9.485 16.824-15.787 21.847-55.013 43.982-253.102 88.31-265.943 183.044-9.943 40.19-68.755 103.929 126.791 129.589 53.869 7.067 127.043 11.245 225.859 11.245 453.509 0 359.745-87.859 346.999-139.37C840.402 676.955 640.716 631.156 585.685 587.176L585.685 587.176z" p-id="20762" fill="#ffffff"></path></svg>
                  </div>
                   </router-link>
                  <p class="mt-2">英灵列表</p>
                </div>          
                <div class="nav-item">
                  <div class="circle d-flex jc-center ai-center">
                    <svg t="1585627526026" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20973" width="200" height="200"><path d="M512.0181274414062 140.7236328125c-125.93957519531247 0-228.48156738281247 102.50326538085938-228.48156738281247 228.48074340820312 0 125.90167236328126 102.46701049804688 228.44448852539062 228.48156738281247 228.44448852539062 125.97665405273438 0 228.517822265625-102.54199218749999 228.517822265625-228.44448852539062 0-125.97747802734375-102.54116821289061-228.48074340820312-228.517822265625-228.48074340820312z" fill="#ffffff" p-id="20974"></path><path d="M688.11962890625 592.4355773925781c-48.68206787109375 38.48208618164063-109.30682373046875 62.32461547851563-176.10150146484375 62.32461547851563-66.79550170898438 0-127.38153076171872-23.915863037109375-176.17565917968753-62.32461547851563C243.4666748046875 651.2484130859374 179.14804077148432 754.5303344726562 170.31338500976562 874.1483764648438c32.343475341796875 4.396728515625001 89.89892578124999 9.127990722656248 172.03436279296875 9.127990722656248h339.1916198730469c82.17333984375 0 139.7650451660156-4.731262207031249 172.14724731445312-9.127990722656248-8.762145996093748-119.69384765625-73.07995605468749-222.89996337890622-165.5669860839844-281.71279907226557z" fill="#ffffff" p-id="20975"></path></svg>
                  </div>
                  <p class="mt-2">礼装列表</p>
                </div>  
                <div class="nav-item">
                  <router-link tag="div" to="/Article/list">
                  <div class="circle d-flex jc-center ai-center">
                    <svg t="1585627681895" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1528" width="200" height="200"><path d="M893.614907 120.84472c-19.080745 0-31.801242 12.720497-31.801242 31.801242l0 737.78882c0 31.801242-31.801242 63.602484-63.602484 63.602484L238.509317 954.037267c-38.161491 0-82.68323-31.801242-82.68323-63.602484l0-69.962733c0-31.801242 38.161491-50.881988 76.322981-50.881988l534.26087 0c19.080745 0 31.801242-12.720497 31.801242-31.801242L798.21118 114.484472c0-69.962733-50.881988-114.484472-127.204969-114.484472L238.509317 0C168.546584 0 98.583851 38.161491 98.583851 114.484472l0 782.310559c0 0 0 0 0 6.360248 0 6.360248 0 6.360248 0 12.720497 6.360248 57.242236 63.602484 101.763975 120.84472 108.124224 0 0 6.360248 0 6.360248 0 0 0 0 0 6.360248 0l566.062112 0c69.962733 0 127.204969-57.242236 127.204969-120.84472L925.416149 152.645963C925.416149 139.925466 912.695652 120.84472 893.614907 120.84472zM772.770186 833.192547 251.229814 833.192547c-19.080745 0-31.801242 12.720497-31.801242 31.801242s12.720497 31.801242 31.801242 31.801242l521.540373 0c19.080745 0 31.801242-12.720497 31.801242-31.801242S791.850932 833.192547 772.770186 833.192547z" p-id="1529" fill="#ffffff"></path></svg>
                  </div>
                  <p class="mt-2">资讯列表</p>
                  </router-link>
                </div>  
                <div class="nav-item ">
                  <div class="circle d-flex jc-center ai-center">
                    <svg t="1585627717998" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1702" width="200" height="200"><path d="M384 480 96 480C44.8 480 0 435.2 0 384L0 96C0 44.8 44.8 0 96 0L384 0c51.2 0 96 44.8 96 96L480 384C480 435.2 435.2 480 384 480z" p-id="1703" fill="#ffffff"></path><path d="M384 1024 96 1024C44.8 1024 0 979.2 0 928L0 640c0-51.2 44.8-96 96-96L384 544c51.2 0 96 44.8 96 96l0 281.6C480 979.2 435.2 1024 384 1024z" p-id="1704" fill="#ffffff"></path><path d="M787.2 1024 787.2 1024c-134.4 0-243.2-108.8-243.2-236.8l0 0c0-134.4 108.8-236.8 236.8-236.8l0 0c134.4 0 236.8 108.8 236.8 236.8l0 0C1024 915.2 915.2 1024 787.2 1024z" p-id="1705" fill="#ffffff"></path><path d="M928 480 640 480C588.8 480 544 435.2 544 384L544 96C544 44.8 588.8 0 640 0l281.6 0C979.2 0 1024 44.8 1024 96L1024 384C1024 435.2 979.2 480 928 480z" p-id="1706" fill="#ffffff"></path></svg>
                  </div>
                  <p class="mt-2">素材列表</p>
                </div>
        </div>
      </div>
      <card title="活动新闻">
        <div class="ml-3" v-for="(item,index) in news" :key="index">
          <router-link tag="div" :to="`/News/${item._id}`" >
              <div class="d-flex">
                 <p class="my-1 flex-1">{{item.title }} </p>
                <p class="mr-3">{{ item.createdAt |date}}</p>
              </div>
          </router-link>
        </div>
      </card>
      <card title="新增英灵图鉴">
        
        <router-link tag="div" class="bg-parimary" :to="`/Hero/${hero[0]._id}`">
              <img :src="hero[0].avatar" class="avatar-img mt-2 ml-3">
        </router-link>
            
      </card>
      <card title="今日信息">
          <svg t="1585790800787" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3394" width="200" height="200"><path d="M116.224 414.208a409.6 409.6 0 1 1 297.984 493.568 407.04 407.04 0 0 1-297.984-493.568" fill="#E72D14" p-id="3395"></path><path d="M537.6 498.688l-18.944 23.04L491.008 512l15.872 25.088-18.944 23.04 28.672-7.168 16.384 25.088v-29.696l29.184-7.68-27.648-10.752z m110.592-62.464h-29.696L609.28 409.6l-9.216 28.672h-29.696l24.064 17.408-9.216 28.672 24.064-17.92 24.064 17.92-9.216-28.672z m-48.64-109.568l4.608 31.744 13.824-26.624 29.696 4.608-21.504-20.992L640 288.768l-25.6 11.264-20.992-20.992 4.608 29.696-26.624 13.312z m-61.44-136.704l-18.944 23.04-28.16-11.264 16.384 25.6-19.456 22.528 29.184-7.168 15.872 25.088V238.08l30.208-7.168-27.648-11.264zM329.728 321.536l-28.16-86.528-28.16 86.528h-90.624L256 374.784 227.84 460.8l73.728-51.2 73.216 51.2-28.16-86.016 73.728-51.2z" fill="#FFD700" p-id="3396"></path></svg>{{China}}
          <svg t="1585791533366" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3862" width="200" height="200"><path d="M957 512c0-245-198-443.7-442.6-445h-4.7C265 68.3 67 267 67 512s198 443.7 442.6 445h4.7C759 955.7 957 757 957 512z m-709 0c0-145.9 118.2-264.1 264.1-264.1 145.8 0 264 118.2 264 264.1 0 145.8-118.2 264-264 264C366.2 776 248 657.8 248 512z" fill="#FFFFFF" p-id="3863"></path><path d="M776 512c0-145.9-118.2-264.1-264-264.1-145.8 0.1-264 118.3-264 264.1s118.2 264 264.1 264C657.8 776 776 657.8 776 512z" fill="#EB0000" p-id="3864"></path></svg>{{Japan}}
          <!-- 3.当前活动信息  (在文章列表中去 分类是活动更新的)
          显示格式为：
          [活动信息的title]活动正在进行 -->
      </card>
      <card title="网站信息">
          <p>关于</p>
          <p>Mooncell是一一个玩家自由构筑的Fate/GrandOrder中文资讯站。这里提供与FGO有关的资料
            您可以自由地阅读查看。
          </p>
      </card>
      <router-view></router-view>
    </div>

  </div>
</template>


<script>
import dayjs from 'dayjs'
export default {
  name: 'home',
  filters:{
    date(val){
        return dayjs(val).format("MM/DD")
    }
  },
  data(){
    return {
        drawer:false,
        China:'',
        Japan:'',
        banners:[],
        news:[],
        hero:[
          {avatar:''}
          ],
    }
  },
  methods:{
    async fetchBanner(){
        //获取banner数据
        var res = await this.$http.get('banner/list')
        this.banners = res.data[0].bannerList
    },
    async fetchNews(){
        var news = await this.$http.get('news/list')
        this.news = news.data.slice(0,5)
        //_id title sub_title content  createdAt
    },
    async fetchHeros(){
      var hero = await this.$http.get('heros/list')
      this.hero = hero.data
    },
    getTime(){
      var vm = this
      var Japantimezone = 9;
      setInterval(function(){
        var ChinaDate = new Date();
        vm.China = ChinaDate.toLocaleString();
        var offset_GMT = ChinaDate.getTimezoneOffset();
        var nowDate = ChinaDate.getTime();
        vm.Japan = new Date(nowDate + offset_GMT*60*1000+Japantimezone*60*60*1000).toLocaleString();
      },1)
    }
  },
  created(){
    this.fetchBanner();
    this.fetchNews();
    this.fetchHeros();
  },
  updated(){
    this.getTime()
  },
}
</script>

<style lang="scss" scope>

@import '../assets/scss/variables';
svg{
    width:45%;
    height:45%
}
.circle{
  width: 40px;
  height: 40px;
  background: map-get($colors, 'light-blue');
  border-radius: 100%;

}
.topbar{
  position: sticky;
}
.nav{
  position: relative;;
  top:0.5* $spacing-base-size;

}
.nav-list{
  justify-content: space-around;
}
.avatar-img{
  width:5*$base-font-size;
}
</style>
<template>
  <div class="home">

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
                  <router-link tag="div" to="/ItemList">
                    <div class="circle d-flex jc-center ai-center">
                      <svg t="1585627717998" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1702" width="200" height="200"><path d="M384 480 96 480C44.8 480 0 435.2 0 384L0 96C0 44.8 44.8 0 96 0L384 0c51.2 0 96 44.8 96 96L480 384C480 435.2 435.2 480 384 480z" p-id="1703" fill="#ffffff"></path><path d="M384 1024 96 1024C44.8 1024 0 979.2 0 928L0 640c0-51.2 44.8-96 96-96L384 544c51.2 0 96 44.8 96 96l0 281.6C480 979.2 435.2 1024 384 1024z" p-id="1704" fill="#ffffff"></path><path d="M787.2 1024 787.2 1024c-134.4 0-243.2-108.8-243.2-236.8l0 0c0-134.4 108.8-236.8 236.8-236.8l0 0c134.4 0 236.8 108.8 236.8 236.8l0 0C1024 915.2 915.2 1024 787.2 1024z" p-id="1705" fill="#ffffff"></path><path d="M928 480 640 480C588.8 480 544 435.2 544 384L544 96C544 44.8 588.8 0 640 0l281.6 0C979.2 0 1024 44.8 1024 96L1024 384C1024 435.2 979.2 480 928 480z" p-id="1706" fill="#ffffff"></path></svg>
                    </div>
                  <p class="mt-2">素材列表</p>
                  </router-link>
                </div>
        </div>
      </div>
	  
	<keep-alive>
      <card title="活动新闻" v-if="news.length!=0">
        <div class="ml-3" v-for="(item,index) in news" :key="index">
          <router-link tag="div" :to="`/News/${item._id}`" >
              <div class="d-flex">
                 <p class="my-1 flex-1 title">{{item.title }} </p>
                <p class="mr-3">{{ item.createdAt |date}}</p>
              </div>
          </router-link>
        </div>
      </card>
	  </keep-alive>
	  
	<keep-alive>
      <card title="新增英灵图鉴" v-if="hero.length!=0">
        <router-link tag="div" class="bg-parimary" :to="`/Hero/${hero[hero.length-1]._id}`">
              <img :src="hero[hero.length-1].avatar" class="avatar-img mt-2 ml-3">
        </router-link> 
      </card>
	</keep-alive>
	
	<keep-alive>
        <card title="活动列表" v-if="activity.length!=0">
          <div v-for="(article,index) in activity" :key="index">
            <router-link tag="div" class="bg-parimary" :to="`/Article/${article._id}`">
                <img :src="article.banner" class="activity-img mt-2 ml-3" :alt='article.title'>
            </router-link>
          </div>
      </card>
	</keep-alive>
	
	<keep-alive>
      <card title="今日信息">
        <ul class="ul-style" >
          <li>
              <img src="../assets/中国国旗-小.png" class="mr-2">{{China}}
          </li>
          <li>
              <img src="../assets/日本国旗-小.png" class="mt-2 mr-2">{{Japan}}
          </li>
          <li>
            <img src="../assets/list-logo.png" class="mt-2 mr-2">
            <b v-if="activity[0].title" v-text ="'当前进行的活动'+' '+ activity[0].title "> </b>
          </li>
        </ul>
      </card>
	  </keep-alive> 
	  
	  <keep-alive>
      <card title="网站信息" >
			<div class="mx-3">
				<p><img src="../assets/list-logo.png" class="mt-2 mr-2">关于</p>
				<p>Mooncell是一一个玩家自由构筑的Fate/GrandOrder中文资讯站。这里提供与FGO有关的资料
				  您可以自由地阅读查看。
				</p>
			</div>
      </card>
	  </keep-alive>
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
        return dayjs(val).format("YY/MM/DD")
    }
  },
  data(){
    return {
       
        China:'',
        Japan:'',
        banners:[],
        news:[],
        activity:[],
        hero:[
          
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
		if(news.data.length<5){
			this.news = news.data.reverse()
		}else{
			this.news = news.data.reverse().slice(0,5)
		}
        this.news = news.data.slice(0,5)
		console.log(news.data,this.news)
        //_id title sub_title content  createdAt
    },
    async fetchHeros(){
      var hero = await this.$http.get('heros/list')
      this.hero = hero.data
    },
    async fetchActivity(){
      var activity = await this.$http.get('activity/list');
      this.activity = activity.data;
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
    this.fetchActivity();
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
.ul-style{
  list-style:none
}
.activity-img{
	
}
</style>
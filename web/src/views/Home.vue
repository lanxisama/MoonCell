<template>
  <div class="home">
    <div class="topbar bg-primary py-2 px-3 text-light-blue d-flex ai-center">
      <img src="../assets/logo.png" height="25">
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
      <card title="活动新闻">
        <div class="ml-3" v-for="(item,index) in news" :key="index">
          <p class="my-1">{{item.title}}</p>
        </div>
      </card>
      <card title="活动新闻">
        <div class="ml-3" v-for="(item,index) in news" :key="index">
          <p class="my-1">{{item.title}}</p>
        </div>
      </card>
      <card title="活动新闻">
        <div class="ml-3" v-for="(item,index) in news" :key="index">
          <p class="my-1">{{item.title}}</p>
        </div>
      </card>
      <card title="活动新闻">
        <div class="ml-3" v-for="(item,index) in news" :key="index">
          <p class="my-1">{{item.title}}</p>
        </div>
      </card>
      <router-view></router-view>
    </div>

  </div>
</template>


<script>

export default {
  name: 'home',
  data(){
    return {
        banners:[],
        news:[]
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
        this.news = news.data
        //_id title sub_title content
    }
  },
  created(){
    this.fetchBanner();
    this.fetchNews();
  }
}
</script>

<style lang="scss" scope>

@import '../assets/scss/variables';
.nav{
  position: relative;;
  top:0.5* $spacing-base-size;
}

</style>
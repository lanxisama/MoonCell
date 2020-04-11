<template>
    <div>
        <back></back>
                <card title="新闻列表">
                    <div class="ml-3" v-for="(item,index) in news" :key="index">
                    <router-link tag="div" :to="`/News/${item._id}`" >
                        <div class="d-flex">
                            <p class="my-1 flex-1">{{item.title }} </p>
                        </div>
                    </router-link>
                    </div>
                </card>
                <card title="文章列表">
                    <div class="ml-3" v-for="(item,index) in articles" :key="index">
                    <router-link tag="div" :to="`/Article/${item._id}`" >
                        <div class="d-flex">
                            <p class="my-1 flex-1">{{item.type}}    |    {{item.title }} </p>
                        </div>
                    </router-link>
                    </div>
                </card>
    </div>
</template>
<script>
export default {
  name: "list",
  data () {
    return {
        count:'',
        news:[],
        articles:[],
        articleList:[]
    };
  },
  methods:{
      load () {
        this.count += 2
      },
      async fetchArticles(){
          //新闻
          //[游戏新闻] 标题          日期
          //文章
          //[相关文章][分类] 标题      日期
          var article = await this.$http.get('article/list')
          var news = await this.$http.get('news/list')
          this.news = news.data
          this.articles = article.data
          
      }
  },
  created(){
      this.fetchArticles()
  }
}
</script>
<style lang="scss" scoped>
</style>
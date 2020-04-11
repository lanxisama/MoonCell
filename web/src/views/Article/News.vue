<template>
    <div>
        <back></back>
        <div class="topbar"></div>
        {{ News.title}}
        {{ News.sub_title}}
        <div class="d-flex jc-center">
            <div v-html=" News.content" class="news px-2 ">
        </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        id:{}
    },
    data(){
        return {
            News:{
                title:'',
                sub_title:'',
                content:''
            }
        }
    },
    methods:{
        async getArticle(){
            //banner里图片点击跳转的是文章
            var res = await this.$http(`/news/list/${this.id}`)
            this.News = res.data
        }
    },
    created(){
        this.getArticle()
    }

}
</script>

<style lang="scss" >
    .news{
        // overflow-x:hidden;
        width:85%;
        height: 100%;
        // flex-wrap: wrap;
        pre{
            white-space: pre-wrap;  
            word-wrap: break-word;
        }
        img{
            max-width: 100%;
            height: auto;
            }
        iframe{
            width:100%;
            height: auto;
            }
    }
</style>
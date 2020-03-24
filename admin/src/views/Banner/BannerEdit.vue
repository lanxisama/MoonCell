<template>
    <div id="edit">
      <el-card :header='id ?"编辑Banner":"新建Banner"'>
      <el-form label-width="120px" @submit.native.prevent="save">
          <el-button
            size="mini"
            @click="model.bannerList.push({})">
            <i class="el-icon-lollipop"></i>增加Banner栏
          </el-button>
        <el-row>
          <el-col v-for="(banner,index) in model.bannerList" :key='index'>
            <el-form label-width="120px" @submit.native.prevent="save">
                <el-form-item label="Banner图" >
                      <el-upload
                          class="avatar-uploader"
                          :action="$http.defaults.baseURL+'/upload'"
                          :show-file-list="false"
                          :on-success="res=>$set(banner,'icon',res.url)"
                          >
                      <img v-if="banner.icon" :src="banner.icon" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      </el-upload>
                </el-form-item> 
                <el-form-item label="对应新闻">
                  <!-- <el-input v-model="banner.url"></el-input> -->
                  <el-select v-model="banner.url">
                      <el-option v-for='(news,index) in NewsList'  :key="index" :label="news.title" :value="news._id"></el-option>
                  </el-select>
                </el-form-item>
                <el-button @click="model.bannerList.splice(index,1)" round type="danger" size="mini">
                  <i class="el-icon-delete"></i>删除Banner</el-button>
            </el-form>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button native-type="submit" type="primary" >保存</el-button>
        </el-form-item>
      </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  name: "edit",
  props:{
    id:{}
  },
  data () {
    return {
        model:{
            bannerList:[
              {
                icon:"",
                url:""
              }
            ],
            
        },
      NewsList:''

    };
  },
  methods:{
    async save(){
          let res 
          console.log(this.model.bannerList)
          if(this.id){
            //编辑
              res=await this.$http.put(`/rest/banner/${this.id}`,this.model)
              this.$router.push('/banner/list')
              this.$message({
              type:"success",
              message:"编辑成功"
              })
          }
          else{
              res=await this.$http.post('/rest/banner',this.model)
              this.$router.push('/banner/list')
              this.$message({
              type:"success",
              message:"保存成功"
              })
          }
      },
    async fetchNews(){
      const res = await this.$http.get('/rest/news')
      this.NewsList = res.data
    },
    async fetch(){
      var res = await this.$http.get(`/rest/banner/${this.id}`)
      console.log(res.data.bannerList)
      this.model.bannerList = res.data.bannerList
      // console.log(this.bannerList)
    }
  },
  created(){
    this.fetchNews()  //获取新闻列表
    this.id && this.fetch()
  }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 16px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 350px;
    height: 150px;
    line-height: 150px;
    text-align: center;
  }
  .avatar {
    width: 280px;
    height: 50%;
    display: block;
  }
</style>
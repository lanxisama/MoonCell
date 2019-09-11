<template>
    <div id="create">
        
        <h1>{{id ?"编辑英灵":"新建英灵"}}</h1>
        <el-form label-width="120px" @submit.native.prevent="save" >
            <div style="margin-top: 1rem;" >
            <el-steps :active="active" finish-status="success" align-center>
              <el-step title="基本信息"></el-step>
              <el-step title="技能信息"></el-step>
              <el-step title="设定信息"></el-step>
              <el-step title="故事背景"></el-step>
           </el-steps>
           
            <el-form-item>
                <el-button v-if="active===3" native-type="submit" type="primary" >保存</el-button>
            </el-form-item>
             
            </div>
          <el-tabs tab-position="right" style="height:75vh;" type="border-card" :value="status" @tab-click="changePage">
            <el-tab-pane label="基础信息" name="baseMessage" > 
              <el-form-item label="英灵名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="职阶">
              <el-select v-model="model.rank">
                <el-option v-for="item in ranks":key="item._id" :label="item.name" :value="item._id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="头像">
                <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL+'/upload'"
                :show-file-list="false"
                :on-success="afterUpload"
                >
                <img v-if="model.avatar" :src="model.avatar" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
             <el-form-item label="稀有度" >
                  <el-rate
                    style="margin-top:0.69rem" 
                    :texts=this.stars
                    :max="5"
                    v-model="model.star"
                    show-text>
                  </el-rate>
             </el-form-item>
            </el-tab-pane>
             
            <el-tab-pane label="技能信息" name="skillsMessage"  >
              技能信息
              </el-tab-pane>
              <el-tab-pane label="设定信息" name="optionMessage"  >
                  呆毛脸 EA特攻
              </el-tab-pane>
            <el-tab-pane label="故事背景" name="storyMessage"  >
                <!-- 英灵故事背景输入 -->
                <el-form-item label="角色详情">
                  <el-input type="textarea" rows="15" v-model="model.role_detail"></el-input>
                </el-form-item>
            </el-tab-pane>
            </el-tabs>
        </el-form>

 


    </div>

 


    
</template>
<script>
 
export default {
    props:{
      id:{}
    },
 
    data(){
        return{
            //组件内用的参数
            status:"baseMessage",
            active:0,
            ranks:{},
            star:0,
            stars:["1星","2星","3星","4星","5星"],
            cards:[],
            //英灵参数
            model:{
                star:0,
                name:"",
                avatar:"",
                role_detail:"",
                },
        }
    },
 
    methods:{
        changePage(tab){
              console.log(this.active)
              this.active=parseInt(tab.index) 
        },
        afterUpload(res){
            this.model.avatar=res.url
        },
        async save(){
            let res
            if(this.id){
              res=await this.$http.put(`/rest/heroes/${this.id}`,this.model)
              this.$router.push('/heroes/list')
              this.$message({
              type:"success",
              message:"编辑成功"
              })
            }
            else
            {
              res=await this.$http.post('/rest/heroes',this.model)
              this.$router.push('/heroes/list')
              this.$message({
              type:"success",
              message:"保存成功"
              })
            }
        },
       async fetch(){
         const res= await this.$http.get(`/rest/heroes/${this.id}`)
         this.model=res.data
       },
       async fetchRank(){
          const res= await this.$http.get('/rest/rank')
          // console.log(res.data)
          this.ranks=res.data
       }
       
    },
    // watch:{
    //     star(){
    //       console.log(this.star)
    //     }
    // },
    created(){
      this.id&&this.fetch()
      this.fetchRank()
    }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
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
    width:100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  
  }
 
</style>





 
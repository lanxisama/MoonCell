<template>
    <div id="create">
        
        <h1>{{id ?"编辑素材":"新建素材"}}</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="素材名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="素材分类">
              <el-select v-model="model.parent" filterable>
                  <el-option v-for="cate in parents":key='cate._id' 
                  :label="cate.name" :value='cate._id'></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="详情信息">
                <el-input type="textarea" rows="4" v-model="model.detail"></el-input>
            </el-form-item>
            <el-form-item label="获取方式">
                  <el-button @click="model.obtain.push({})">新增</el-button>
                  <el-row type="flex" style="flex-wrap:wrap">
                    <el-col v-for="(item,index) in model.obtain":key="index">
                        <el-form-item>
                          <el-col :span="12" style="margin-bottom:1rem;">
                            <el-input v-model="item.way" placeholder="获取方式"></el-input>
                          </el-col>
                          <el-button @click="model.obtain.splice(item,1)" 
                            type="danger" circle size="mini" 
                            style="margin-left:1rem;">
                            <i class="el-icon-delete"></i> 
                          </el-button>
                        </el-form-item>

                    </el-col>
                  </el-row>
            </el-form-item>
            <el-form-item label="图片">
                <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL+'/upload'"
                :show-file-list="false"
                :on-success="afterUpload"
                >
                <img v-if="model.icon" :src="model.icon" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            <el-form-item>
                <el-button native-type="submit" type="primary">保存</el-button>
            </el-form-item>
            </el-form-item>
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
            parents:[],
            model:{
                name:"",
                icon:"",
                detail:"",
                obtain:[]
                },
        }
    },
 
    methods:{
        afterUpload(res){
            this.model.icon=res.url
        },
        async save(){
            let res
            if(this.id){
              res=await this.$http.put(`/rest/items/${this.id}`,this.model)
              this.$router.push('/items/list')
              this.$message({
              type:"success",
              message:"编辑成功"
              })
            }
            else
            {
              res=await this.$http.post('/rest/items',this.model)
              this.$router.push('/items/list')
              this.$message({
              type:"success",
              message:"保存成功"
              })
            }
        },
       async fetch(){
         const res= await this.$http.get(`/rest/items/${this.id}`)
         this.model=res.data
       },
       async fetchParents(){
          const res= await this.$http.get('/rest/item-parent')
          this.parents=res.data
       }
    },
    created(){
      
      this.id&&this.fetch()
      this.fetchParents()
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





 
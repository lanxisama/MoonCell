<template>
    <div id="create">
      <el-card :header='id ?"编辑分类":"新建分类"'>
        <!-- <h1>{{id ?"编辑分类":"新建分类"}}</h1> -->
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="上级分类">
              <el-select v-model="model.parent" filterable>
                <el-option v-for="item in parents":key="item._id" :label="item.name" :value="item._id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="职阶图标" v-if="model.parent==='5d7736db9ac5d12f70f803bd'">
                  <el-upload
                      class="avatar-uploader"
                      :action="$http.defaults.baseURL+'/upload'"
                      :show-file-list="false"
                      :on-success="afterUpload"
                      >
                  <img v-if="model.icon" :src="model.icon" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
            </el-form-item>
            <el-form-item label="分类名称">
                <el-input v-model="model.name" clearable style="width:250px;"></el-input>
            </el-form-item>
  
            <el-form-item>
                <el-button native-type="submit" type="primary" >保存</el-button>
            </el-form-item>
        </el-form>
    </el-card>
    </div>




    
</template>
<script>
export default {
    props:{
      id:{}
    },
    data(){
        return{
            model:{
                name:"",
                icon:""
                },
            parents:[]
        }
    },
    methods:{
        afterUpload(res){
            this.model.icon=res.url
        },
        async save(){
            let res
            if(this.id){
                res=await this.$http.put(`/rest/categories/${this.id}`,this.model)
                this.$router.push('/categories/list')
                this.$message({
                type:"success",
                message:"编辑成功"
                })
            }
            else
            {
                res=await this.$http.post('/rest/categories',this.model)
                this.$router.push('/categories/list')
                this.$message({
                type:"success",
                message:"保存成功"
                })
            }
        },
       async fetch(){
         const res= await this.$http.get(`/rest/categories/${this.id}`)
         this.model=res.data
       },
       async fetchParents(){
          var mid=[]
          const res= await this.$http.get('/rest/categories')
          mid=res.data
          for(var item of mid){
            if(!item.parent)
              this.parents.push(item)
          }
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
    width: 100px;
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





 
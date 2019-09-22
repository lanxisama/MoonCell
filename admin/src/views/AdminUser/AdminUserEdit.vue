<template>
    <div id="create">
        <h1>{{id ?"编辑用户":"新建用户"}}</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="账号">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="model.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button native-type="submit" type="primary">保存</el-button>
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
            model:{},
        }
    },
    methods:{
        afterUpload(res){
            this.model.icon=res.url
        },
        async save(){
            let res
            if(this.id){
              res=await this.$http.put(`/rest/admin_user/${this.id}`,this.model)
              this.$router.push('/admin_user/list')
              this.$message({
              type:"success",
              message:"编辑成功"
              })
            }
            else
            {
              res=await this.$http.post('/rest/admin_user',this.model)
              this.$router.push('/admin_user/list')
              this.$message({
              type:"success",
              message:"保存成功"
              })
            }
        },
       async fetch(){
         const res= await this.$http.get(`/rest/admin_user/${this.id}`)
         this.model=res.data
       },
    },
    created(){  
      this.id&&this.fetch()
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





 
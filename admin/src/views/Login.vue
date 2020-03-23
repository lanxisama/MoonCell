<template>
<div class="login-container">
            lanxisama|wgq000816
    <el-card header="请先登录" class="login-card">
        <el-form @submit.native.prevent="login">
            <el-form-item label="账号">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="model.password"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" native-type="submit">登陆</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</div>
</template>
<script>
export default {
 
  data () {
    return {
        model:{}
    };
  },
  methods:{
      async login(){
          const res=await this.$http.post('/login',this.model)
          console.log(res)
          localStorage.token=res.data.token
          localStorage.adminType= res.data.adminType
          localStorage.username = res.data.username
          this.$router.push('/')
          this.$message({
              type:'success',
              message:`欢迎${res.data.username}`
          })
      }
  }
}
</script>
<style  scoped>
.login-card{
    width:28rem;
    margin:10rem auto;
}
</style>
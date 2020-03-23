<template>
    <el-container style="height:100vh;">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router unique-opened :default-active="$route.path">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>内容管理</template>
        <el-menu-item-group>
          <template slot="title">分类</template>
          <el-menu-item index="/categories/create">新建分类</el-menu-item>
          <el-menu-item index="/categories/list">分类列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">素材</template>
          <el-menu-item index="/items/create">新建素材</el-menu-item>
         <el-menu-item index="/items/list">素材列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">英灵</template>
          <el-menu-item index="/heroes/create">新建英灵</el-menu-item>
         <el-menu-item index="/heroes/list">英灵列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">Banner</template>
          <el-menu-item index="/banner/create">新建Banner</el-menu-item>
         <el-menu-item index="/banner/list">Banner列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>文章管理</template>
          <el-menu-item-group>
          <template slot="title">新闻</template>
          <el-menu-item index="/news/create">新建新闻</el-menu-item>
          <el-menu-item index="/news/list">新闻列表</el-menu-item>
        </el-menu-item-group>
          <el-menu-item-group>
          <template slot="title">文章</template>
          <el-menu-item index="/article/create">新建文章</el-menu-item>
          <el-menu-item index="/article/list">文章列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu >
    <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>权限管理</template>
          <el-menu-item-group>
          <template slot="title">管理员</template>
          <el-menu-item index="/admin_user/create">新建用户</el-menu-item>
          <el-menu-item index="/admin_user/list">用户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu >
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <span class="marginRight">{{username}}</span>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <el-button @click="exit()" style="border:none;">退出账号</el-button>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </el-header>
    
    <el-main>
        <router-view :key="$route.path"></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<style>
.marginRight{
  margin-right: 5px;
}
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
        return {
          
        }
    },
    methods:{
      exit(){
        localStorage.clear();
        this.$router.push('/login');
        this.$message({
          type:"success",
          message:"退出成功"
        })
      },
    },
    computed:{
      username(){
        return localStorage.username
      }
    }
  };
</script>

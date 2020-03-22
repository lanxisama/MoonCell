<template>
  <div id="app">
    <div class="topbar bg-primary py-2 px-3 text-light-blue d-flex ai-center">
      <img src="./assets/logo.png" height="25">
      <div class="px-2 flex-1">
        <div class="text-dark-blue">Mooncell</div>
      </div>
      <el-dropdown size="small" class="jc-end">
          <span class="el-dropdown-link">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/Hero">Hero</router-link>
              </el-dropdown-item>
            <el-dropdown-item divided>
              <router-link to="/HeroList">HeroList</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
    </el-dropdown>
    </div>
    <div class="nav">
      nav
    </div>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      
    }
  }
}
</script>

<style>
</style>

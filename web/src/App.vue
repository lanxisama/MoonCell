<template>
  <div id="app">
    <el-drawer
      title="我是标题"
      direction="ltr"
      :visible.sync="drawer"
      :with-header="false"
    >
      <div>
          <p class="mt-3">/Home 里面</p>
      </div>
    </el-drawer>
    <div class="topbar ">
      <div class="bg-primary py-2 px-3 text-light-blue d-flex ai-center">
        <img src="./assets/logo.png" height="25" @click="drawer = true">
        <div class="px-2 flex-1">
          <div class="text-dark-blue">Mooncell</div>
        </div>
        <el-dropdown size="small" class="jc-end">
            <span class="el-dropdown-link">
              <i class="el-icon-more"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/Hero" tag="div">Hero</router-link>
                </el-dropdown-item>
              <el-dropdown-item divided>
                <router-link to="/HeroList">HeroList</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
       drawer:false,
    }
  }
}
</script>

<style lang="scss" scope>
.topbar{
  position: sticky;
  top:0;
  z-index:999;
}
</style>

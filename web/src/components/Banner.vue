<template>
    <div class="banner mx-1">
        <el-carousel trigger="click" height="150px" arrow="always">
          <el-carousel-item v-for="(data,index) in bannerList" :key="index">
             <img class="w-100" :src="data.icon" @click="$router.push(`/News/${data.url}`)">
          </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    props:{
        bannerList:{type:Array,required:true}
    },
    updated(){
    }
}
</script>

<style >
</style>>

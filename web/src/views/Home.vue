<template>
  <div class="home">
      <router-link to="/Hero">Hero</router-link> |
      <router-link to="/HeroList">HeroList</router-link>
      <div @click="$router.go(-1)">这是一个按钮</div>
      <router-view ></router-view>

  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

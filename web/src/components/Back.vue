<template>
    <div class="back">
        <div class="bg-primary mt-1 mx-1" @click="backPage">
            <svg t="1586570508045" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2575" width="200" height="200"><path d="M 614.4 738.133 c -8.53333 8.53333 -21.3333 8.53333 -29.8667 0 l -209.067 -209.067 c -8.53333 -8.53333 -8.53333 -21.3333 0 -29.8667 l 209.067 -209.067 c 8.53333 -8.53333 21.3333 -8.53333 29.8667 0 c 8.53333 8.53333 8.53333 21.3333 0 29.8667 L 418.133 512 l 196.267 196.267 c 4.26667 8.53333 4.26667 21.3333 0 29.8667 Z" p-id="2576"></path></svg>
        </div>
    </div>
</template>
<script>
export default {
  name: "back",
  data () {
    return {
    };
  },
  methods:{
    backPage(){
        this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
svg{
    width:10%;
    height:10%
}
</style>
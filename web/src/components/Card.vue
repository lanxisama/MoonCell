<template>
    <div>
        <div class="bg-primary m-2 border-radius fs-lg text-dark-blue">
            <p class="pt-2 ml-3">{{title}}</p>
            <div class="border-bottom mx-3 mt-1"></div>
            <slot></slot>   
        </div>
        
    </div>
</template>
<script>
export default {
  name: "card",
  props:{
      title:{type:String,required:true}
  },
  data () {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables';

.border-bottom{
    border-bottom: 1px map-get($colors,'light-blue') solid;
}
</style>
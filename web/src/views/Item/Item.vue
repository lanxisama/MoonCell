<template>
    <div>
        <back></back>
        {{id}}
    </div>
</template>
<script>
export default {
  name: "item",
  props:{
    id:{type:String,required:true}
  },
  data () {
    return {
    };
  }
}
</script>
<style lang="scss" scoped>
</style>
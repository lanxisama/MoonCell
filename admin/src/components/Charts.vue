<template>
  <div>
    <!-- :loading="false" 设置是否显示加载动画-->
    <ve-line :data="chartData" :settings="chartSettings" width="700px" height="300px" :loading="heroData.length===0"></ve-line>
  </div>
 
</template>
 
<script>
// v-charts 需要先安装echarts才能用
import VeLine from 'v-charts/lib/line.common'
import 'v-charts/lib/style.css'
export default {
  components: { VeLine },
  props:{
    heroData:{
      type:Array
    }
  },
  data () {
    this.chartSettings = {
        label: {
        normal: { show: true },
      }
    }
    return {
        chartData: {
        columns: ["level","ATK","HP"],
        rows:[]
      }
    }
  },
  methods:{
 
  },
  computed:{

  },
  updated(){
      this.chartData.rows=this.heroData
  },
  created(){
      // this.chartData.rows=this.heroData
  },

}
</script>




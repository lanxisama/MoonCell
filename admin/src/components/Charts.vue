<template>
  <div>
    <ve-line :data="chartData" :settings="chartSettings" :width="width"></ve-line>
  </div>
 
</template>
 
<script>
// v-charts 需要先安装echarts才能用
import VeLine from 'v-charts/lib/line.common'
export default {
  components: { VeLine },
  props:["heroData"],
  data () {
    this.chartSettings = {
        
    }
    return {
        width:"",
        newData:[],
        chartData: {
        columns: ["level","ATK","HP"],
        rows: []
      }
    }
  },
  methods:{
      NewData(){
          for(var item in this.heroData){
              var newobj={}
              const level=""
              console.log(typeof item)
              if(item ==="0"){
                    level="1"
              }
              else{
                    level=item+0
              }
              newobj.level=level
              newobj.ATK=this.heroData[item].ATK
              newobj.HP=this.heroData[item].HP
              this.newData.push(newobj)
          }
      this.chartData.rows=this.newData
      }
  },
  created(){
       this.NewData()
       this.width="100%"
       console.log(this.chartData.rows)
  },

}
</script>




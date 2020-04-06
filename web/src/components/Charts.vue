<template>
  <div id="charts">
      <div id="main" style="width:400px;height:400px;" class="mx-2 d-flex jc-center">
        这地方是个图表1
      </div>
  </div>
 
</template>
 
<script>

export default {
  props:{
    heroData:{
      type:Array
    },

  },
  data () {
    return {
      atkList:[],
      hpList:[]
    }
  },
  methods:{
      drawChart(){
        var vm = this
        let myChart = this.$echarts.init(document.getElementById("main"))
        var option = {
          title:{
            text:"成长曲线"
          },
           calculable : true,
          legend:{
            data:["等级","ATK","HP"]
          },
          xAxis:{
            data:["1","10","20","30","40","50","60","70","80","90","100"]
          },
          yAxis:{},
          series:[
            {
              name:"攻击力",
              type:"line",
              smooth:0.5,
              data:vm.atkList
            },
            {
              name:"生命值",
              type:"line",
              smooth:0.5,
              data:vm.hpList
            }
          ]
        }
 
        myChart.setOption(option);
      }
  },
  computed:{

  },
  updated(){

  },
  created(){
      // this.chartData.rows=this.heroData
      this.heroData.forEach(item=>{
            this.atkList.push(item.ATK)
            this.hpList.push(item.HP)
      })
      console.log(this.atkList,this.hpList)
      
  },
  mounted(){
     this.drawChart()
  }
}
</script>




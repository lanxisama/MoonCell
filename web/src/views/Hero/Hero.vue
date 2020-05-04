<template>
  <div class="hero">
    <back></back>
      <div class="mx-2" v-if='id'>
        <!-- accordion -->
        <el-collapse >
          <el-collapse-item title="基础数值" name="1">
            名字{{heros.name}} <br>
            星级
              <el-rate
                v-model="heros.star"
                disabled
               >
              </el-rate><br>
            立绘
              <el-image :src="heros.photo" class="p-3">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
            画师:{{heros.painter}}<br>
            职介
              <img class="rank" v-if="heros.rank" :src="heros.rank.icon"></img><br>
            性别  {{heros.sex}}<br>
            特性  {{heros.attributes.name}} 
            声优  {{heros.voice_actor}}<br>
            隐藏属性  {{heros.hidden_attribute.name}}<br>
            属性 
            <ul>
              <li>筋力  {{heros.property.strength}}</li>
              <li>耐力  {{heros.property.durable}}</li>
              <li>敏捷  {{heros.property.agile}}</li>
              <li>魔法  {{heros.property.magic}}</li>
              <li>幸运  {{heros.property.lucky}}</li>
              <li>宝具  {{heros.property.treasure}}</li>
            </ul>

            类型 
                <li>特性 {{heros.type.characteristic}}</li>
                <li>人型 {{heros.type.Human_type}}</li>
                <li>EA特攻 {{heros.type.SpecialByEA}}</li>
            数值 ATK/HP
            <li>{{heros.Growth[0].level+'级'}} | {{heros.Growth[0].ATK}}|{{heros.Growth[0].HP}}</li>
            <li>{{heros.Growth[8].level+'级'}} | {{heros.Growth[8].ATK}}|{{heros.Growth[8].HP}}</li>
            <li>{{heros.Growth[9].level+'级'}} | {{heros.Growth[9].ATK}}|{{heros.Growth[9].HP}}</li>
          </el-collapse-item>

          <el-collapse-item title="宝具" name="2">
            <img :src="heros.treasure.icon" class="skill"></img>
            <ul>
              <li>{{heros.treasure.name}}</li>
              <li>{{heros.treasure.rank}}</li>
              <li>{{heros.treasure.num}}</li>
              <li>{{heros.treasure.description}}</li>
            </ul>
              
              
              
              
              
          </el-collapse-item>

          <el-collapse-item title="技能" name="3">
              <div
                v-for="(s,index) in heros.skills" :key="index">
                <strong style="display:block">{{'技能'+(index+1)}}</strong>
                  <img :src="s.icon" class="skill"></img>
                  <p>{{s.name}}</p>
                  <p>{{s.cd}}</p>
                  <p>{{s.description}}</p>
              </div>
                <el-divider>
                     &nbsp
                </el-divider>
              <div
                v-for="(gs,index) in heros.grade_skills" :key="index">
                 <strong style="display:block">{{'职阶技能'+(index+1)}}</strong>
                      <img :src="gs.icon" class="skill"></img>
                      <p>{{gs.name}}</p>
                      <p>{{gs.description}}</p>
              </div>
          </el-collapse-item>

          <el-collapse-item title="素材需求" name="4">

            <el-table :data="heros.spend">
               <el-table-column
                  prop="item_id.name"
                  label="素材名"
                >
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="需求数量"
                  >
                </el-table-column>
            </el-table>

          </el-collapse-item>


          <el-collapse-item title="成长曲线" name="5">
          <div>
            <my-charts :heroData ="heros.Growth"></my-charts>
          </div>
          </el-collapse-item>
          <el-collapse-item title="资料" name="6">
            {{heros.height}}
            {{heros.weight}}
              <el-image :src="heros.photo" class="p-3">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
            {{heros.role_detail}}
          </el-collapse-item>
        </el-collapse>
      </div>
  </div>
</template>

<script>

export default {
    name:'hero',
    props:{
      id: {type:String,required:true}
    },
    data(){
      return {
        heros:{}
      }
    },
    methods:{
      async fetchHero(){
          var heroMessage = await this.$http.get(`heros/${this.id}`)
          this.heros = heroMessage.data
          // console.log(heroMessage.data.Growth)
      }
    },
    created(){
        this.id&&this.fetchHero()
    }
}
</script>

<style scoped>
.rank{
  width:10%;
}
.skill{
  width:10%;
}
</style>

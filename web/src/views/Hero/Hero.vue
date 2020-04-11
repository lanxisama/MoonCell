<template>
  <div class="hero">
    <back></back>
      <div class="mx-2" v-if='id'>
        <!-- accordion -->
        <el-collapse >
          <el-collapse-item title="基础数值" name="1">
            名字{{heros.name}}
            星级
              <el-rate
                v-model="heros.star"
                disabled
               >
              </el-rate>
            立绘
              <el-image :src="heros.photo" class="p-3">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
            画师:{{heros.painter}}
            职介
              <img class="rank" v-if="heros.rank" :src="heros.rank.icon"></img>
            性别{{heros.sex}}
            特性{{heros.attributes.name}}
            声优{{heros.voice_actor}}
            隐藏属性{{heros.hidden_attribute.name}}
            属性 
              筋力  {{heros.property.strength}}
              耐力  {{heros.property.durable}}
              敏捷  {{heros.property.agile}}
              魔法  {{heros.property.magic}}
              幸运  {{heros.property.lucky}}
              宝具  {{heros.property.treasure}}
            类型 
                特性 {{heros.type.characteristic}}
                人型 {{heros.type.Human_type}}
                EA特攻 {{heros.type.SpecialByEA}}
            数值Growth 取得1级 90级 100级
            {{heros.Growth[0].level}} | {{heros.Growth[0].ATK}}|{{heros.Growth[0].HP}}
            {{heros.Growth[8].level}} | {{heros.Growth[8].ATK}}|{{heros.Growth[8].HP}}
            {{heros.Growth[9].level}} | {{heros.Growth[9].ATK}}|{{heros.Growth[9].HP}}
          </el-collapse-item>

          <el-collapse-item title="宝具" name="2">
              {{heros.treasure.name}}
              {{heros.treasure.rank}}
              {{heros.treasure.num}}
              <img :src="heros.treasure.icon" class="skill"></img>
              {{heros.treasure.description}}
          </el-collapse-item>

          <el-collapse-item title="技能" name="3">
              <div
                v-for="(s,index) in heros.skills" :key="index">
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
                      <img :src="gs.icon" class="skill"></img>
                      <p>{{gs.name}}</p>
                      <p>{{gs.description}}</p>
              </div>
          </el-collapse-item>

          <el-collapse-item title="素材需求" name="4">
            <el-table :data="heros.spend">
              <el-table-column
                prop="_id"
                label="种类"
                >
              </el-table-column>
              <el-table-column
                prop="item_id"
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
           <my-charts :heroData ="heros.Growth"></my-charts>
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

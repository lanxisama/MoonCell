<template>
  <div class="herolist">
      <div class="d-flex" style="justify-content: space-around;">
        <div v-for="r in rank" :key='r._id' >
          <img :src='r.icon' style="width: 2rem; height: 2rem"
          @click="changeRankStatus(r.name)"
          :class="{gray:!options[r.name]}"></img>
        </div>
      </div>
      <div>
        <el-table
        class="mx-2"
        :data='heros'>
          <el-table-column
            prop="avatar"
            label="头像">
              <template slot-scope="scope">
                  <img :src="scope.row.avatar" alt="" style="height:3rem;"
                  @click="toPath(scope.row._id)">
              </template>
          </el-table-column>
          <el-table-column
            prop="rank"
            label="职阶">
          </el-table-column>
          <el-table-column
            prop="name"
            label="名字">
          </el-table-column>
        </el-table>
        <!-- <div v-for="hero in heros" :key="hero._id" class="d-flex">
        <router-link tag="div" class="bg-parimary" :to="`/Hero/${hero._id}`">
              <img :src="hero.avatar" class="avatar-img mt-2 ml-3">
        </router-link>
        </div> -->
      </div>
  </div>
</template>
<script>
export default {
  name:'herolist',
  data(){
    return {
      rank:[],
      heros:[],
      options:{} //查询条件 利用这个东西进行查询判断
    }
  },
  methods:{
    async fetchRank(){
      var find = await this.$http.get('category/rank');
      this.rank = find.data
      for(let item of this.rank){
          this.$set(this.options,item.name,true)
       }
    },
    async fetchHero(){
       var find  = await this.$http.get('heros/list');
       this.heros = find.data
    },
    changeRankStatus(name){
      this.options[name] = !this.options[name]
    },
    toPath(id){
      this.$router.push({ path: `/Hero/${id}` })
    }
  },
  created(){
    this.fetchRank()
    this.fetchHero()
  },
  beforeMount(){
    
  },
  mounted(){
    
  }
}
</script>

<style scoped>
.gray { 
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    
    filter: grayscale(100%);
	
    filter: gray;
}
</style>
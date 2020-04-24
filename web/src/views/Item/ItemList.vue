<template>
  <div class="itemlist">
    <back></back>
      <div>
        <el-table
        class="mx-2"
        :data='items'
         @row-click='itemDetail'
        >

          <el-table-column
            type="index"
            >
          </el-table-column>
          <el-table-column
            prop="parent.name"
            label="分类">
          </el-table-column>
          <el-table-column
            prop="icon"
            label="图标">
              <template slot-scope="scope">
                  <img :src="scope.row.icon" alt="" style="height:3rem;"
                  >
              </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="名称">
          </el-table-column>
 
        </el-table>
      </div>
  </div>
</template>
<script>
let that;
export default {
  name:'itemlist',
  data(){
    return {
      items:[]
    }
  },
  methods:{
    async fetchItems() {
        var items = await this.$http.get('item/list')
        this.items = items.data
    },
    itemDetail(row, column, event){
        this.$router.push({path:`/Item/${row._id}`})
    }
  },
  beforeMount(){
       
  },
  created(){
    this.fetchItems()
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
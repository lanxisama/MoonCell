<template>
  <div class="itemlist">
    <back></back>
      <div>
        <el-table
        class="mx-2"
        :data='items'
        >

          <el-table-column
            type="expand"
            >
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <div>
            <el-form-item label="素材简介">
              <span>{{ props.row.detail }}</span>
            </el-form-item>
          </div>
           <div>
            <el-form-item label="获取地点">
              <ul>
                <li v-for="item of getObtain(props.row)" :key="index">
                  {{item}}
                </li>
              </ul>
            </el-form-item>
           </div>
        </el-form>
      </template>
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
      items:[],
      obtains:[]
    }
  },
  methods:{
    async fetchItems() {
        var items = await this.$http.get('item/list')
        this.items = items.data
    },
    // itemDetail(row, column, event){
    //     this.$router.push({path:`/Item/${row._id}`})
    // }
    getObtain(row){
      var res = []
      row.obtain.forEach(item =>res.push(item.way))
      return res
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
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
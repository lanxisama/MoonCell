<template>
    <div id="list">
        <el-table 
        :data="pageList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        >
            <el-table-column prop="parent._id" label="上级分类" ></el-table-column>
            <el-table-column prop="_id" label="ID" width="220px"></el-table-column>
            <el-table-column prop="icon" label="图标">
                <template slot-scope="scope">
                    <img :src="scope.row.icon" alt="" style="height:3rem;">
                </template>
            </el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column >
                    <template slot="header" slot-scope="scope">
                        <el-input
                        v-model="search"
                        size="mini"
                        placeholder="输入关键字搜索"/>
                    </template>
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="$router.push(`/categories/edit/${scope.row._id}`)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="remove(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="paginationClass">
            <el-pagination
            @current-change="handleCurrentChange" :current-page="currentPage1"
            :page-size="pageSize" layout="total, prev, pager, next, jumper"
            :total="totalData">
            </el-pagination>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            totalData:0,
            currentPage1:1,
            pageSize:10,
            categoryList:[],
            pageList:[],
            search:''
        }
    },
    methods:{
        //页码切换
        handleCurrentChange: function(currentPage) {
            this.currentPage1 = currentPage
            this.currentChangePage(this.categoryList,currentPage)
        },
        //分页方法（重点）
        currentChangePage(list,currentPage) { 
            let from = (currentPage - 1) * this.pageSize;
            let to = currentPage * this.pageSize;
            this.tempList = this.categoryList.slice(from,to);
            this.pageList=this.tempList
        },
        // 分页结束
        async fetch(){
            const res=await this.$http.get('/rest/categories')
            this.categoryList=res.data
            this.totalData=res.data.length
            this.pageList=this.categoryList.slice(0,this.pageSize);
        },
        async remove(row){
            this.$confirm(`此操作将永久删除"${row.name}", 是否继续?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(async() => {
            await this.$http.delete(`/rest/categories/${row._id}`)
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            this.fetch()
            })
        }
    },
    created(){
        this.fetch()
    }
}
</script>
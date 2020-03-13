<template>
    <div id="list">
        <el-table :data="pageList">
            <el-table-column prop="_id" label="序号" width="220px"></el-table-column>
            <el-table-column prop="username" label="账号"></el-table-column>
            <el-table-column prop="password" label="密码"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="$router.push(`/admin_user/edit/${scope.row._id}`)">编辑</el-button>
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
            adminList:[],
            pageList:[]
        }
    },
    methods:{
        //页码切换
        handleCurrentChange: function(currentPage) {
            this.currentPage1 = currentPage
            this.currentChangePage(this.adminList,currentPage)
        },
        //分页方法（重点）
        currentChangePage(list,currentPage) { 
            let from = (currentPage - 1) * this.pageSize;
            let to = currentPage * this.pageSize;
            this.tempList = this.adminList.slice(from,to);
            this.pageList=this.tempList
        },
        // 分页结束
        async fetch(){
            const res=await this.$http.get('/rest/admin_user')
            this.adminList=res.data
            this.totalData=res.data.length
            this.pageList=this.adminList.slice(0,this.pageSize);
        },
        async remove(row){
            this.$confirm(`此操作将永久删除"${row.username}", 是否继续?`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(async() => {
            await this.$http.delete(`/rest/admin_user/${row._id}`)
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
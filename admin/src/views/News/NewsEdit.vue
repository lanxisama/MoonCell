<template>
    <div id="create">
        
        <el-card :header='id ?"编辑新闻":"创建新闻"' class="login-card">
            <el-form label-width="120px" @submit.native.prevent="save">
                
                <el-form-item label="标题">
                    <el-input v-model="model.title"></el-input>
                </el-form-item>
                <el-form-item label="副标题">
                    <el-input v-model="model.sub_title"></el-input>
                </el-form-item>

                <el-form-item label="新闻">
                    <vue-editor id="editor" useCustomImageHandler @image-added="handleImageAdded" v-model="model.content"> </vue-editor>
                <el-form-item>
                    <el-button native-type="submit" type="primary">保存</el-button>
                </el-form-item>
                </el-form-item>
            </el-form>
        </el-card>
    </div>




    
</template>
<script>
 import { VueEditor } from "vue2-editor";
export default {
    components: {
        VueEditor
    },
    props:{
      id:{}
    },
    data(){
        return{
            model:{
                title:"",
                sub_title:"",
                content:""
                },
        }
    },
 
    methods:{
        //富文本编辑器 图片处理
        async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
                var formData = new FormData();
                formData.append("file", file);
                const res =await this.$http.post('/upload',formData)
                Editor.insertEmbed(cursorLocation, "image", res.data.url);
                resetUploader()
            },
        async save(){
            let res
            if(this.id){
                //编辑
                const res=await this.$http.put(`/rest/news/${this.id}`,this.model)
                this.$router.push('/news/list')
                this.$message({
                type:"success",
                message:"编辑成功"
                })
            }
            else{
                const res=await this.$http.post('/rest/news',this.model)
                this.$router.push('/news/list')
                this.$message({
                type:"success",
                message:"新建成功"
                })
            }
        },
        async fetch(){
            const res=await this.$http.get(`/rest/news/${this.id}`)
            this.model=res.data
        }
       },
       created(){
           this.id&&this.fetch()
       }
    }
</script>

<style>
   
</style>





 


 
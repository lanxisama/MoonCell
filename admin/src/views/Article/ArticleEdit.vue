<template>
    <div id="create">
        <h1>{{id ?"编辑文章":"创建文章"}}</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            
            <el-form-item label="标题">
                <el-input v-model="model.title"></el-input>
            </el-form-item>
            <el-form-item label="分类">
                <el-select v-model="model.type">
                    <el-option v-for="(item,index) in ArticleType"
                    :key="index"
                    :label="item"
                    :value="item"></el-option>
                </el-select>
            </el-form-item>
                <el-form-item label="活动banner" v-if="model.type==='活动更新'">
                        <el-upload
                        class="avatar-uploader"
                        :action="$http.defaults.baseURL+'/upload'"
                        :show-file-list="false"
                        :on-success="res=>$set(model,'banner',res.url)"
                        >
                        <img v-if="model.banner" :src="model.banner" class="avatar" style="width:160px;height:50%">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                </el-form-item>
            <el-form-item label="新闻">
                <vue-editor id="editor" useCustomImageHandler @image-added="handleImageAdded" v-model="model.content"> </vue-editor>
            <el-form-item>
                <el-button native-type="submit" type="primary">保存</el-button>
            </el-form-item>
            </el-form-item>
        </el-form>
    </div>




    
</template>
<script>
import {mapState} from 'vuex'
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
                type:"",
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
                const res=await this.$http.put(`/rest/article/${this.id}`,this.model)
                this.$router.push('/article/list')
                this.$message({
                type:"success",
                message:"编辑成功"
                })
            }
            else{
                const res=await this.$http.post('/rest/article',this.model)
                this.$router.push('/article/list')
                this.$message({
                type:"success",
                message:"新建成功"
                })
            }
        },
        async fetch(){
            const res=await this.$http.get(`/rest/article/${this.id}`)
            this.model=res.data
        }
       },
       computed:{
           ...mapState(['ArticleType'])
       },
       created(){
           this.id&&this.fetch()
       }
    }
</script>

<style>
   
</style>





 


 
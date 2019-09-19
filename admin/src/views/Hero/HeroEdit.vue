<template>
    <div id="create">
        <h1>{{id ?"编辑英灵":"新建英灵"}}</h1>
        <el-form label-width="120px" @submit.native.prevent="save" >
            <div style="margin-top: 1rem;" >
            <el-steps :active="active" finish-status="success" align-center>
              <el-step title="基本信息"></el-step>
              <el-step title="技能信息"></el-step>
              <el-step title="宝具设定"></el-step>
              <el-step title="设定信息"></el-step>
              <el-step title="故事背景"></el-step>
           </el-steps>
           
            <el-form-item>
                <el-button v-if="active===4" native-type="submit" type="primary" >保存</el-button>
            </el-form-item>
             
            </div>
            <!-- type="border-card"  卡片样式 -->
          <el-tabs tab-position="right"  :value="status" @tab-click="changePage">
            <el-tab-pane label="基础信息" name="baseMessage" > 
              <el-form-item label="英灵名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="职阶">
              <el-select v-model="model.rank">
                <el-option v-for="item in ranks" :key="item._id" :label="item.name" :value="item._id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="model.sex">
                <el-option v-for="(item,index) in Sex" :key="index" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item  label="身高/(cm)">
                <el-input v-model="model.height" ></el-input>
            </el-form-item>
            <el-form-item  label="体重/(kg)">
                <el-input v-model="model.weight" ></el-input>
            </el-form-item>
            <el-form-item label="属性">
              <el-select v-model="model.attributes" filterable multiple>
                <el-option v-for="item in attributes" :key="item._id" :label="item.name" :value="item._id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="隐藏属性">
              <el-select v-model="model.hidden_attribute">
                <el-option v-for="item in hidden_attributes" :key="item._id" :label="item.name" :value="item._id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="头像">
                <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL+'/upload'"
                :show-file-list="false"
                :on-success="afterUpload"
                >
                <img v-if="model.avatar" :src="model.avatar" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
             <el-form-item label="稀有度" >
                  <el-rate
                    style="margin-top:0.69rem" 
                    :texts=Stars
                    :max="5"
                    v-model="model.star"
                    show-text>
                  </el-rate>
             </el-form-item>
            <el-form-item  label="画师">
                <el-input v-model="model.painter" ></el-input>
            </el-form-item>
            <el-form-item  label="声优">
                <el-input v-model="model.voice_actor" ></el-input>
            </el-form-item>
            </el-tab-pane>
             
            <el-tab-pane label="技能信息" name="skillsMessage"  >
              <el-form-item>
                <el-form-item>
                    <el-button
                    round
                    size="mini"
                    @click="model.skills.push({})">
                      <i class="el-icon-lollipop"></i>增加技能
                    </el-button>
                </el-form-item>
                <el-row>
                  <el-col v-for="(item,index) in model.skills" :key="index" style="padding:1rem;border:1px solid #EEEEEE;margin-top:1rem;">
                    <el-form-item  label="技能名称">
                        <el-input v-model="item.name" ></el-input>
                    </el-form-item>
                    <el-form-item label="头像">
                        <el-upload
                        class="avatar-uploader"
                        :action="$http.defaults.baseURL+'/upload'"
                        :show-file-list="false"
                        :on-success="res=>$set(item,'icon',res.url)"
                        >
                        <img v-if="item.icon" :src="item.icon" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item  label="冷却">
                        <el-input v-model="item.cd" ></el-input>
                    </el-form-item>
                    <el-form-item  label="技能描述">
                        <el-input v-model="item.description" ></el-input>
                    </el-form-item>
                    <el-button @click="model.skills.splice(item,1)" round type="danger" size="mini"><i class="el-icon-delete"></i>删除技能</el-button>
                    </el-col>
                </el-row>
                <hr>
                职阶技能
                <el-form-item>
                    <el-button
                    round
                    size="mini"
                    @click="model.grade_skills.push({})">
                      <i class="el-icon-lollipop"></i>增加职阶技能
                    </el-button>
                </el-form-item>
                <el-row>
                  <el-col v-for="(item,index) in model.grade_skills" :key="index" style="padding:1rem;border:1px solid #EEEEEE;margin-top:1rem;">
                    <el-form-item  label="技能名称">
                        <el-input v-model="item.name" ></el-input>
                    </el-form-item>
                    <el-form-item label="图标">
                        <el-upload
                        class="avatar-uploader"
                        :action="$http.defaults.baseURL+'/upload'"
                        :show-file-list="false"
                        :on-success="res=>$set(item,'icon',res.url)"
                        >
                        <img v-if="item.icon" :src="item.icon" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item  label="技能描述">
                        <el-input v-model="item.description" ></el-input>
                    </el-form-item>
                    <el-button @click="model.grade_skills.splice(item,1)" round type="danger" size="mini"><i class="el-icon-delete"></i>删除技能</el-button>
                    </el-col>
                </el-row>
                属性图表
                <my-charts :heroData="model.Growth"></my-charts>
              </el-form-item>
              </el-tab-pane>
              <el-tab-pane label="宝具设定" name="treasureMessage" >
                宝具设定  Treasure
                宝具名
                <el-form-item label="宝具名">
                  <el-input  v-model="model.treasure.name"></el-input>
                </el-form-item>
                <el-form-item label="宝具等级">
                    <el-select v-model="model.treasure.rank">
                        <el-option v-for='(r,index) in Rank' :key="index" :label="r" :value="r"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="图标">
                          <el-upload
                          class="avatar-uploader"
                          :action="$http.defaults.baseURL+'/upload'"
                          :show-file-list="false"
                          :on-success="res=>$set(model.treasure,'icon',res.url)"
                          >
                          <img v-if="model.treasure.icon" :src="model.treasure.icon" class="avatar">
                          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                          </el-upload>
                      </el-form-item>
                <el-form-item label="数值">
                   <el-input label="数值" v-model="model.treasure.num"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input type="textarea" v-model="model.treasure.description" row=5></el-input>
                </el-form-item>

              </el-tab-pane>
              <el-tab-pane label="设定信息" name="optionMessage">
                    <el-row type="flex" justify="space-around">
                      <el-col>
                    <el-form-item label="筋力">
                      <el-select v-model="model.property.strength">
                        <el-option v-for='(item,index) in Rank'  :key="index" :label="item" :value="item"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="耐力">
                      <el-select v-model="model.property.durable">
                        <el-option v-for='(item,index) in Rank'  :key="index" :label="item" :value="item"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="敏捷">
                      <el-select v-model="model.property.agile">
                        <el-option v-for='(item,index) in Rank'  :key="index" :label="item" :value="item"></el-option>
                      </el-select>
                    </el-form-item>
                      <el-form-item label="魔法">
                      <el-select v-model="model.property.magic">
                        <el-option v-for='(item,index) in Rank'  :key="index" :label="item" :value="item"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="幸运">
                      <el-select v-model="model.property.lucky">
                        <el-option v-for='(item,index) in Rank'  :key="index" :label="item" :value="item"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="宝具">
                      <el-select v-model="model.property.treasure">
                        <el-option v-for='(item,index) in Rank'  :key="index" :label="item" :value="item"></el-option>
                      </el-select>
                    </el-form-item>
                     </el-col>
                     <el-col>
                      <el-form-item label="人型">
                        <el-select v-model="model.type.Human_type">
                          <el-option v-for='(item,index) in TrF'  :key="index" :label="item" :value="item"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="被EA特攻">
                        <el-select v-model="model.type.SpecialByEA">
                          <el-option v-for='(item,index) in TrF'  :key="index" :label="item" :value="item"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="特性">
                            <el-input v-model="model.type.characteristic"></el-input>
                      </el-form-item>

                      </el-col>
                     </el-row>
                     成长属性
                     <el-button @click="model.Growth.push({})" round size="mini">
                        <i class="el-icon-lollipop"></i> 增加10级
                       </el-button>
                      <el-row type="flex" style="flex-wrap:wrap;">
                          <el-col v-for="(item,index) in  model.Growth" :key="index" style="margin-top:1rem;">
                            <h1 style="display:none">{{item.level=String(index*10)}}</h1>
                          <strong>{{item.level}}级数据</strong>
                          <el-button @click="model.Growth.splice(item,1)" type="danger" circle size="mini" style="margin-left:1rem;">
                         <i class="el-icon-delete"></i> 
                         </el-button>
                      <el-form-item label="ATK">
                            <el-input v-model="item.ATK" maxlength="10" show-word-limit></el-input>
                      </el-form-item>
                      <el-form-item label="HP" >
                            <el-input v-model="item.HP" maxlength="10" show-word-limit></el-input>
                      </el-form-item>                      
                          </el-col>
                          
                      </el-row>
                      
              </el-tab-pane>
            <el-tab-pane label="故事背景" name="storyMessage">
                <!-- 英灵故事背景输入 -->
                <el-form-item label="角色详情">
                  <el-input type="textarea" rows="5" v-model="model.role_detail"></el-input>
                </el-form-item>
                <el-form-item label="角色立绘" style="display:flex">
                        <el-upload
                        style="justify-content: center"
                        class="avatar-uploader"
                        :action="$http.defaults.baseURL+'/upload'"
                        :show-file-list="false"
                        :on-success="res=>$set(model,'photo',res.url)"
                        >
                        <img v-if="model.photo" :src="model.photo" class="avatar" style="width:160px;height:50%">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                </el-form-item>
                <el-form-item label="升级材料">
                     <el-row type="flex" style="flex-wrap:wrap;">
                       <el-button @click="model.spend.push({})" round size="mini">新加一列</el-button>
                       <el-col v-for="(item,index) in model.spend" :key="index" style="padding:1rem;border:1px solid #EEEEEE;margin-top:1rem;">
                            <el-form-item label="素材">
                              <el-select v-model="item.item_id" filterable>
                                <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
                              </el-select>
                            </el-form-item>
                            <el-form-item label="数量">
                                <el-input-number v-model="item.num" :min="1" :max="999"></el-input-number>
                            </el-form-item>
                            <el-button @click="model.Growth.splice(item,1)" type="danger" circle size="mini" style="margin-left:1rem;">删除</el-button>
                       </el-col>
                     </el-row>
                </el-form-item>
            </el-tab-pane>
            </el-tabs>
        </el-form>    
    </div>

 


    
</template>
<script>
import Charts from '../../components/Charts'
import {mapState} from 'vuex'
export default {
    props:{
      id:{}
    },
    components:{
        "my-charts":Charts
    },
    data(){
        return{
            //组件内用的参数
            items:{},  //查询全部素材
            dialogImageUrl: '',
            dialogVisible: false,
            status:"baseMessage",
            hidden_attributes:{},
            active:0,
            ranks:{},
            attributes:{},
            star:0,
            cards:[],
            //英灵参数
            model:{
                star:0,
                name:"",
                photo:"", //全身像
                avatar:"",
                height:100,
                weight:50,
                role_detail:"",  //角色详情
                attributes:{}, //属性
                painter:'',
                voice_actor:"",
                sex:"",
                property:{
                  strength:"",
                },
                treasure:{},
                type:{
                  Human_type:"",
                  SpecialByEA:""
                },
                Growth:[],  //长度是10的数组
                grade_skills:[],
                skills:[],
                spend:[] //材料花费
                },
        }
    },
    methods:{
        // handleRemove(file, fileList) {
        //   console.log(file, fileList);
        // },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        changePage(tab){
              this.active=parseInt(tab.index) 
        },
        afterUpload(res){
            this.model.avatar=res.url
        },
        async save(){
            let res
            if(this.id){
              res=await this.$http.put(`/rest/heroes/${this.id}`,this.model)
              this.$router.push('/heroes/list')
              this.$message({
              type:"success",
              message:"编辑成功"
              })
            }
            else
            {
              res=await this.$http.post('/rest/heroes',this.model)
              this.$router.push('/heroes/list')
              this.$message({
              type:"success",
              message:"保存成功"
              })
            }
        },
       async fetch(){
         const res= await this.$http.get(`/rest/heroes/${this.id}`)
        //  this.model=res.data
         this.model=Object.assign({},this.model,res.data) //防止服务器传来的信息中的属性将原有model中的覆盖
       },
       async fetchRank(){
          const res= await this.$http.get('/rest/rank')
          this.ranks=res.data
       },
       async fetchAttribute(){
          const res=await this.$http.get('/rest/attribute')
          this.attributes=res.data
       },
       async fetchHidden_attribute(){
            const res=await this.$http.get('/rest/hidden_attribute')
            this.hidden_attributes=res.data
       },
       async fetchItems(){
            const res=await this.$http.get('/rest/items')
            this.items=res.data
            console.log(this.items)
       }
    },
    computed:{
        ...mapState(['Rank','TrF','Sex','Stars'])
    },
    created(){
      this.id&&this.fetch()
      this.fetchRank()
      this.fetchAttribute()
      this.fetchHidden_attribute()
      this.fetchItems()
    }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width:100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
    
  }
 
</style>





 
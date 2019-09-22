const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const schema=new mongoose.Schema({
    username:{type:String},   //标题
    password:{type:String,
        select:false,
        set(val){
        return bcrypt.hashSync(val,10)
    }}, //分类
},{
    timestamps:true //创建时候自动添加时间戳
})
 
module.exports=mongoose.model("AdminUser",schema)
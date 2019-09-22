const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    title:{type:String},   //标题
    type:{type:String}, //分类
    banner:{type:String}, //活动大图
    content:{type:String},  //文章内容
},{
    timestamps:true //创建时候自动添加时间戳
})
 
module.exports=mongoose.model("Articles",schema)
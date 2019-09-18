const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    title:{type:String},   //标题
    sub_title:{type:String},  //副标题
    content:{type:String},  //文章内容
},{
    timestamps:true //创建时候自动添加时间戳
})
 
module.exports=mongoose.model("News",schema)
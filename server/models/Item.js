const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    parent:{type:mongoose.SchemaTypes.ObjectId,ref:"Category"},  //父
    name:{type:String},   //名称
    detail:{type:String},
    icon:{type:String},
    obtain:[{
        way:{type:String}
    }] //获取方式
})
 
module.exports=mongoose.model("Item",schema)
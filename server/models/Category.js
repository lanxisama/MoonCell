const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    name:{type:String},
    icon:{type:String},  //图标
    parent:{type:mongoose.SchemaTypes.ObjectId,ref:"Category"},
    
})
 
module.exports=mongoose.model("Category",schema)
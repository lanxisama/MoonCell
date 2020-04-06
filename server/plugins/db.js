module.exports=(app)=>{
    const mongoose=require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/mooncell',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
    })

    //把模型全部引用一次，避免报错
    require('require-all')(__dirname+'/../models')
}
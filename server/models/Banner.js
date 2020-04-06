const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    // icon url Array
    bannerList:[{
        icon:{type:String},
        url:{type:String}
    }]
})


module.exports=mongoose.model("Banner",schema)
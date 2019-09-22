module.exports = options => {
    return async(rq,rs,next)=>{
        const modelName=rq.params.resource
        const Category =require('../models/Category')
        const inflection=require('inflection')
        try{
            const Model=require(`../models/${inflection.classify(modelName)}`)
            if(Model){
                rq.Model=Model
                next()
            }
        }
        catch(e){
            if(modelName==='rank'){
                //如果模型中查找不到modelName 则该操作不按照正常查找
                const rank =await Category.find({parent:"5d7736db9ac5d12f70f803bd"}).populate('parent')
                rs.send(rank)
            }
            if(modelName==='attribute'){
                const attribute =await Category.find({parent:"5d7737249ac5d12f70f803c0"}).populate('parent')
                rs.send(attribute)
            }
            if(modelName==='hidden_attribute'){
                const hidden_attribute =await Category.find({parent:"5d7737609ac5d12f70f803c1"}).populate('parent')
                rs.send(hidden_attribute)
            }
            if(modelName==='item-parent'){
                const item_parent =await Category.find({parent:"5d81cee3b5919b367c1f1038"}).populate('parent')
                rs.send(item_parent)
            }
        }
     
    }
  }
//router>admin>index.js

module.exports=(app)=>{
    const express=require('express')
    const router=express.Router({
        mergeParams:true
    })

    router.post("/",async(rq,rs)=>{
        const model=await rq.Model.create(rq.body)
        rs.send(model)
    })
    router.get("/",async(rq,rs)=>{
        const queryOption={}
        // modelName属性获取模型的名称
        if(rq.Model.modelName==='Category')
        {
            queryOption.populate='parent'
        }
        const data = await rq.Model.find().setOptions(queryOption) //.limit()限制取10条数据
        rs.send(data)
    })
    router.get("/:id",async(rq,rs)=>{
        const data=await rq.Model.findById(rq.params.id)
        rs.send(data)
    })
    router.put("/:id",async(rq,rs)=>{
        const data=await rq.Model.findByIdAndUpdate(rq.params.id,rq.body)
        rs.send(data)
    })
    router.delete("/:id",async(rq,rs)=>{
        await rq.Model.findByIdAndDelete(rq.params.id,rq.body)
        rs.send({
            status:"OK",
            message:"delete success"
        })
    })
    router.get('/rank',async(rq,rs)=>{

    })







    app.use('/admin/api/rest/:resource',async(rq,rs,next)=>{
        const modelName=rq.params.resource
        const inflection=require('inflection')
        try{
            const Model=require(`../../models/${inflection.classify(modelName)}`)
            if(Model){
                rq.Model=Model
                next()
            }
        }
        catch(e){
            if(modelName==='rank'){
                //如果模型中查找不到modelName 则该操作不按照正常查找
                const Category =require('../../models/Category')
                const data =await Category.find({parent:"5d7736db9ac5d12f70f803bd"}).populate('parent')
                rs.send(data)
            }
        }
     
    },router)

    const multer=require("multer")
    const upload=multer({dest:__dirname+'/../../uploads'})
    app.post('/admin/api/upload',upload.single('file'),async(rq,rs)=>{
        const file=rq.file  
        file.url=`http://localhost:3000/uploads/${file.filename}`
        rs.send(file)
    })

}
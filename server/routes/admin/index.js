//router>admin>index.js

module.exports=(app)=>{
    const AdminUser=require('../../models/AdminUser')
    const jwt =require('jsonwebtoken')
    const assert=require('http-assert')
    const express=require('express')
    const authorMid=require('../../middleware/auth')()
    const resource=require('../../middleware/resource')()
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

    // async (rq, rs, next) => {
    //     const token = String(rq.headers.authorization || '').split(' ').pop()
    //     assert(token, 401, '请先登录')
    //     const { id } = jwt.verify(token, rq.app.get('secret'))
    //     assert(id, 401, '请先登录')
    //     rq.user = await AdminUser.findById(id)
    //     assert(rq.user, 401, '请先登录')
    //     await next()
    //   }
    app.use('/admin/api/rest/:resource',authorMid
    ,resource,router)

    const multer=require("multer")
    const upload=multer({dest:__dirname+'/../../uploads'})
    app.post('/admin/api/upload',upload.single('file'),async(rq,rs)=>{
        const file=rq.file  
        file.url=`http://localhost:3000/uploads/${file.filename}`
        rs.send(file)
    })

    
    app.post('/admin/api/login',async(rq,rs)=>{
        const{username,password}=rq.body
        const user=await AdminUser.findOne({username:username}).select('+password')
        const adminType = user.adminType
        assert(user,422,'用户不存在')
        const isValid = require('bcrypt').compareSync(password,user.password)
        assert(isValid,422,'密码错误')
        // if(!isValid){
            //密码不对
            // rs.status(422).send({
            //     message:"密码错误"
            // })
        // }

        //返回token
        const token=jwt.sign({
           username:user.username,
           adminType:user.adminType
        },app.get('secret'))
        rs.send({token,username,adminType})
    })
    

    app.use(async(err,rq,rs,next)=>{
        rs.status(err.statusCode||500).send({
            message:err.message
        })
        
    })
}
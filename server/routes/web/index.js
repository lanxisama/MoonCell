module.exports = (app) =>{
    const router =require('express').Router(
        {
            mergeParams:true
        }
    )
    const mongoose = require('mongoose')
    const Banner = require('../../models/Banner')
    const News = require('../../models/News')
    const Hero = require('../../models/Hero')
    const Article = require('../../models/Article')
    const Category = require('../../models/Category')
    router.get('/banner/list',async function(rq,rs){
            var find = await Banner.find().lean()
            rs.send(find)
    })
    router.get('/news/list/:id',async function(rq,rs){
        var find = await News.findById(rq.params.id).lean()
        rs.send(find)
    })
    router.get('/news/list',async function(rq,rs){
        var find = await News.find().lean()
        rs.send(find)  
    })
    router.get('/article/list',async function(rq,rs){
        var find = await Article.find().lean()
        rs.send(find)  
    })
    router.get('/heros/list',async function(rq,rs){
        var find = await Hero.find().lean()
        rs.send(find)  
    })
    router.get('/heros/:id',async function(rq,rs){
            var find = await Hero.findById(rq.params.id).
            populate('rank').
            populate('attributes').
            populate('hidden_attribute')
            // .setOptions(
            //     {
            //         populate:'rank',
            //         // populate:'attributes',
            //         // populate:'hidden_attribute'
            //     }
            //     )
            rs.send(find)
    })
    router.get('/category/rank',async function(rq,rs){
        var find = await Category.find({parent:'5d7736db9ac5d12f70f803bd'}).lean()
        rs.send(find)
        console.log(find)
    })
    app.use('/web/api',router)
}
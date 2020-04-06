module.exports = options => {
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../models/AdminUser')
  
    return async(rq,rs,next)=>{
        const token=String(rq.headers.authorization).split(' ').pop() ||''
        assert(token,401,'登陆') 
        const {username,adminType} = jwt.verify(token, rq.app.get('secret'))
        assert(username, 401, '请先登录')
        rq.user = await AdminUser.findOne({username})
        assert(rq.user, 401, '请先登录')
        await next()
    }
  }
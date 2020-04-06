//main>index.js
const express=require("express")
const cors=require('cors')

const app=express()
app.set('secret','sGdig4r3w￥eq6')
app.use(express.json())
app.use(cors())
app.use('/uploads',express.static(__dirname+'/uploads'))
require('./plugins/db')(app)
require('./routes/admin')(app)

require('./routes/web')(app)

app.listen(3000,()=>{
    console.log("http://localhost:3000");
})

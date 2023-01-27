const express=require('express')
const dbconn = require('./db/conn.js')
const router=require('./route/routers.js')

const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',router)

app.get("/*",(req,res)=>{
    res.status(404).send({msg:"Page not available"})
})
// db connections
dbconn().then()
.catch(console.error)
.finally(()=>console.log('mongodb connected successfully..'))


const PORT=process.env.PORT||9000
module.exports= app.listen(PORT,()=>{
    console.log(`server is running on port number ${PORT}`)
})
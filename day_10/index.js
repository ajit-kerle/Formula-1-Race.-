const express=require('express')
const main=require('./db/conn.js')
const router=require('./route/routers.js')

const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',router)

main().then(console.log)
.catch(console.error)
.finally(()=>client.close())


const PORT=process.env.PORT||9000
app.listen(PORT,()=>{
    console.log(`server is running on port number ${PORT}`)
})
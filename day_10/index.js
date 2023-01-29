const express=require('express')
const dbconn = require('./db/conn.js')
const router=require('./route/routers.js')
const app=express()
const http = require('http');


// socket io
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);



app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',router)

app.get("/*",(req,res)=>{
    res.status(404).send({msg:"Page not available"})
})
// db connections
module.exports=io.on('connection', (socket) => {
    console.log('a user connected');
  });
  

dbconn().then()
.catch(console.error)
.finally(()=>console.log('mongodb connected successfully..'))


const PORT=process.env.PORT||9000
module.exports= app.listen(PORT,()=>{
    console.log(`server is running on port number ${PORT}`)
})
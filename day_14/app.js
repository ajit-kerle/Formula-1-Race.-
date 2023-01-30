const express=require('express')
const app=express()
const http=require('http').Server(app)

const path=require("path")

var io=require('socket.io')(http)



app.use(express.static(__dirname+"/"))

var users=0

var roomno=1;

var full=0

// let csp=io.of("/chats")

io.on("connection",function(socket){
    console.log("A user connected")
    
    // csp.emit("testevent","chats one")
    

    // rooms code 
    // socket.join("room-"+roomno)

    // io.sockets.in("room-"+roomno).emit('connectedRoom',"you are connected to room number "+roomno)
    
    // full++;
    // if(full>=2){
    //     full=0
    //     roomno++
    // }
    // =================================
    // users++;
    // socket.emit("newuserevents",{msg:"hi users dear"})
    // socket.broadcast.emit("newuserevents",{msg:users+" user connected"})
    // io.sockets.emit("broadcast",{message:users+" users connected!"})

    // broadcast : how many user connected

    // sending events to client side==========
    // setTimeout(function(){
    //     socket.send("sent message by server by prereserved events ");
    // },3000)
    // socket.emit("customEvent",{id:1,msg:"hello user"})
    
   // recieving events 
    // socket.on("customEvent",(data)=>{
    //     console.log(data)
    // })
    // =====================================

    socket.on("disconnect",function(){
        console.log("A user disconnected")

        // users--;
        // roomno--
        // full--


        // io.sockets.emit("broadcast",{message:users+" users connected!"})
        // socket.broadcast.emit("newuserevents",{msg:users+" user connected"})
    })
})


http.listen(3000,()=>{
    console.log('server started on '+3000)
})


app.get("/",(req,res)=>{ 

   
   
    res.sendFile(__dirname+"/index.html")
})

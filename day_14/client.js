const socket=io()


// recieving events ======
// socket.on("customEvent",function(data){
//     document.write(data.msg)
// })

//sending events
// socket.emit("customEvent",{id:1,msg:"hello user"})

// socket.on("broadcast",(data)=>{
//     document.body.innerHTML="";
//     document.write(data.message)
// })

socket.on("newuserevents",(data)=>{
    document.body.innerHTML="";
    document.write(data.msg)
})
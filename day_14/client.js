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

// socket.on("newuserevents",(data)=>{
//     document.body.innerHTML="";
//     document.write(data.msg)
// })


// name spaces
// socket.on("testevent",(data)=>{
//    document.write(data)
// })


// rooms 
// socket.on("connectedRoom",(data)=>{
//     document.body.innerHTML="";
//     document.write(data)
// })



// Error handling in socket io 

// socket.on("connect_failed",()=>{
//     alert("sorry error here")
// })

// socket.on("error",()=>{
//     alert("sorry error here")
// })

// socket.on("reconnect_failed",()=>{
//     alert("sorry error here")
// })
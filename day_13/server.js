const express=require('express')
const app=express()
const server=require('http').createServer(app);
const io=require('socket.io')(server);

const {MongoClient}=require('mongodb')

const URL='mongodb://localhost:27017'

const DATABASE="mongochat"

const client = new MongoClient(URL)

async function dbconn(){
    await client.connect()
    const db = client.db(DATABASE)

    // console.log(db)
    const chats=db.collection('chitchat')
    // cons
    // console.log(users)
    return chats
}

dbconn().then()
.catch(console.error)
.finally(()=>console.log('mongodb connected successfully..'))


const PORT=3000

io.on("connection",(socket)=>{
    console.log("connected...")

    socket.on("message",(msg)=>{
        console.log(msg);

        socket.broadcast.emit("message",msg)
        // io.emit("chat",payload)
dbconn().then()
.catch(console.error)
.finally(()=>console.log('mongodb connected successfully..'))

    })
})


server.listen(PORT||5000,()=>{
    console.log("server is listening at port 5000...")
})


app.use(express.static(__dirname+"/public"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
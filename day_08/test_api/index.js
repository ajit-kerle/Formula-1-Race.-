const express=require('express')
const dotenv=require('dotenv')
const path=require('path')


// console.log(express)
const app=express()
dotenv.config()


// app.get('^/$|index.html',(req,res)=>{
//     // res.send('hello world')
//     res.sendFile(path.join(__dirname,'views','index.html'))
// })
// // console.log(__dirname)


const One=(req,res,next)=>{
    console.log('one')
    next()   
}

const Two=(req,res,next)=>{
    console.log('two')
    next()   
}

const lastOne=(req,res)=>{
   res.status(200).json("last one")
}

app.get('/test',One,Two,lastOne,(req,res)=>{
    res.status(200).send({status:true,message:'test is heated'})
})

// app.get('/*',One,Two,(req,res)=>{
//     res.status(404).send('Route not found')
// })



const PORT=process.env.PORT||9000

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})
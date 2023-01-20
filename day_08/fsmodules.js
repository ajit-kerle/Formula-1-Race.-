// fs modules

const fs=require('fs')

fs.readFile('./demo.txt',(err,data)=>{
    if(err){
        throw err
    }
    console.log(data)
})


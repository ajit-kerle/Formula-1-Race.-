const fs=require('fs')
const path=require('path')



fs.readFile(path.join(__dirname,'files','demo.txt'),(err,data)=>{
    if(err){
        throw err
    }
    // console.log('text data  ',data.toString())
    let text=data.toString()
    // console.log(typeof data)
    // console.log(text[0])
    console.log(text)
    console.log('reading completed....')

})



// writing in  file 
fs.writeFile(path.join(__dirname,'files','new1.txt'),'i have created this file using fs modules',(err)=>{
    if(err){
        throw err
    }
    console.log('writing completed....')

    // it update already created files
    fs.appendFile(path.join(__dirname,'files','new1.txt'),'\n\ndata is appending using noode js',(err)=>{
        if(err) throw err
        console.log('append operation done....')

        fs.rename(path.join(__dirname,'files','new1.txt'),path.join(__dirname,'files','renamedFile.txt'),(err)=>{
            if(err) throw err
            console.log('file is renamed ...')
        })
    })
    
})


// append file  // it create new file and append data in it ot it update data
// fs.appendFile(path.join(__dirname,'files','test.txt'),'data is appending using noode js',(err)=>{
//     if(err) throw err
//     console.log('append operation done....')
// })


// renaming file 

// fs.rename(path.join(__dirname,'files','new1.txt'),path.join(__dirname,'files','renamedFile.txt'),(err)=>{
//     if(err) throw err
//     console.log('file is renamed ...')
// })




process.on('uncaughtException',(err)=>{
    console.log('there is an uncatught Exception',err)
    process.exit(1)
})





// ======================================================

// console.log('hello 2')


// fs.readFile('./files/index.html','utf8',(err,data)=>{
//     if(err){
//         throw err
//     }
//     console.log('html files ',data.toString())
// })


// console.log('hello 4')

// fs.readFile('./style.css',(err,data)=>{
//     if(err) throw err
//     console.log(data.toString())
// })


// console.log('hello 5')


// fs.readFile('./largedata.txt','utf8',(err,data)=>{
//     if(err) throw err
//     console.log(data.toString())
// })


// // epost
// fs.readFile('./bigdata.txt','utf8',(err,data)=>{
//     if(err){
//         throw err
//     }
//     // console.log(data.toString())
//     console.log(data)

// })
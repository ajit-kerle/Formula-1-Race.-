const fs=require('fs')



const rs=fs.createReadStream('./files/lorem.txt',{encoding:'utf8'})

let ws=fs.createWriteStream('./files/new-lorem.txt')


// rs.on('data',(datachunck)=>{
//     ws.write(datachunck)
// })

rs.pipe(ws)

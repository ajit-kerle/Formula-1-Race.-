const fs=require('fs')


console.log('first')
console.log(fs.statSync('./lorem.txt'))
let data=fs.readFileSync('./lorem.txt','utf8') // synchronus running 
console.log('readFileSync : ',data)



console.log('second')
fs.readFile('./lorem.txt',(err,data)=>{   // asynchronusly running
    if (err) throw err
    console.log(data)
})

console.log('third ')  
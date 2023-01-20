// fs wid promises
const fsPromises=require('fs').promises
const path=require('path')




let fileOps=async ()=>{
    try{
        let data=await fsPromises.readFile(path.join(__dirname,'files','demo.txt'),'utf8')

        console.log(data)


        // deleing files
        await fsPromises.unlink(path.join(__dirname,'files','index.html'))
        console.log('file is unlink and deleted')
        

        await fsPromises.writeFile(path.join(__dirname,'files','test.txt'),data)
        console.log('file is written')
        await fsPromises.appendFile(path.join(__dirname,'files','test.txt'),data)
        console.log('data is appended in already existed file')
        await fsPromises.rename(path.join(__dirname,'files','test.txt'),path.join(__dirname,'files','lazyfile.txt'),)
        console.log('file renamed')


    }catch(err){
        console.log('Error while manipulating files: ',err)
    }
}
fileOps()
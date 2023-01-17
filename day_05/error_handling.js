// // error handling 
// try{
// //    console.log(z)
//    const z=8
//    z=2
// }catch(error){
//     // console.log(error)
//     // error object is having two fields
//     // name or message
//     // console.log(error.name)
//     // console.log(error.message)
//     // console.log(error.stack)
// }

// const x=10
// x=11
// console.log(x)


// try{
// let json = '{"name":"John", "age": 30}';
// console.log(user['age'])
// let user=JSON.parse(json)
// console.log(user)
// console.log(user['age'])
// }catch{
//   console.log('error while parsing')
// }

// let err=new Error('error checking')
// console.log(err.name)
// console.log(err.message)

    let data='{"name":"John", "age": 30}';
try{
    let user=JSON.parse(data)
    
    if(!user.lname){
        throw new SyntaxError("Incomplete data: no name")
    }
    console.log(user.lname)
}catch(error){
    console.log("catch block error "+error.message)
}finally{
    console.log('last it runs ..')
}
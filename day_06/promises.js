// promise

// let promise=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         // res('Promise is resolved')
//         rej('Promise is rejected')
//     },2000)
// })

// promise.then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
// .finally(()=>{console.log('finall statement executed')})

// catch , finally , then 

// ==============================================
// promise chaining 
// let data=fetch('https://jsonplaceholder.typicode.com/todos/1')

// data.then((data)=>{return data.json()})
// .then((data)=>{console.log(data)})
// .finally(()=>{console.log('fetched data successfully')})


// ======================================================

// promise. all , allsettled , race


// promise .all
// let promise=Promise.all([
//     new Promise((res,rej)=>{
//         setTimeout(()=>{res('1 st promise resolved')},1000)
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(()=>{rej('2 nd promise rejected')},1000)
//     })
// ])
// promise.then((result)=>{console.log(result)})


// promise.allSettled
// let promise=Promise.allSettled([
//     new Promise((res,rej)=>{
//         setTimeout(()=>{res('1 st promise resolved')},1000)
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(()=>{rej('2 nd promise rejected')},1000)
//     })
// ])
// promise.then((result)=>{console.log(result)})


// =======================================
// promise race 
// let promise=Promise.race([
//     new Promise((res,rej)=>{
//         setTimeout(()=>{res('1 st promise resolved')},1000)
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(()=>{rej('2 nd promise rejected')},5000)
//     })
// ])

// promise.then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})


// promises========
// error handling with 

let promises=new Promise((res,rej)=>{
    rej(new Error('Error occur in promises'))
}).then((result)=>{console.log(result)}).catch((err)=>{console.log(err.message)})
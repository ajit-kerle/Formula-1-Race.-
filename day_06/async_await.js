// async await

// asyn await with promises 

// async function getData(){
//     let promise=new Promise((res,rej)=>{
//        setTimeout(()=>{
//        res('promise resovled')

//        },1000) 
//     })


//     let user=await promise
//     console.log(user)
// }

// getData()



// async await 

async function getData(){

    let user=await fetch('https://jsonplaceholder.typicode.com/todos')
    // console.log(user)
    let data=await user.json()
    console.log(data)
}

getData()
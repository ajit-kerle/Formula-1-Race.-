// callback

let mainFunction=(callback)=>{
    setTimeout(()=>{
      callback([1,2,3,5])
    },2000)
}


let add=(array)=>{
    let sum=0
    for(let i=0;i<array.length;i++){
        sum+=array[i]
    }
    console.log(sum)
}

mainFunction(add)


// promises

let promise=new Promise((resolve,reject)=>{
    let x='ajit'
    let y='ajit'
    if(x===y){
        resolve('resolved queries')
    }else{
        reject()
    }
});

promise.then((data)=>{console.log(data)})
.catch((error)=>{console.log(error)})


// ========================
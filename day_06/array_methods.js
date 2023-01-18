let arr=[1,5,4,9,7,6,1]

// foreach method
// arr.forEach((n,i,arr)=>{console.log(n," ",i,' ',arr)})

// let sum =0
// arr.forEach((n)=>{sum+=n})
// console.log(sum)

// let count={}

// arr.forEach((n)=>{
//     if(count[n]){
//         count[n]+=1
//     }else{
//         count[n]=1
//     }
// })
// console.log(count)



// =============================
// map create new arra return it 

// let res=arr.map((n)=>{
//     return n*2
// })

// console.log(res)

// async function getData(){
//       let data=await fetch('https://jsonplaceholder.typicode.com/todos')
//       let res=await data.json()
//       console.log(res)
// }


console.log(arr.toString())
console.log(arr.join())
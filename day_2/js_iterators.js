// Iterables

// let arr=['ajit','sanket','kerle','sam']

// console.log(typeof arr[Symbol.iterator])
// let iter=arr[Symbol.iterator]();
// console.log(iter)
// console.log(iter.next())
// let res=iter.next()
// console.log(iter.next().value)
// console.log(iter.next().value)
// console.log(iter.next().value)
// console.log(iter.next().value)
// console.log(iter.next().value)

// while(!res.done){
//     console.log(res.value)
//     res=iter.next();
// }

// iterator with string

// let str='hello'

// let iter=str[Symbol.iterator]()

// console.log(iter.next())

// customize iterators
// let numbers=[100,200,300,400]

// let num=numberIterotor(numbers)
// console.log()

// iterator
// function numberIterotor(arr){
//     var nextNum=0
//    return {
//     next(){
//         if(nextNum<arr.length){

//         return {value:arr[nextNum++],done:false}
//         }else{
//          return  {done:true}
//         }
//     },
    
//    }
// }

// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())

// Array.from
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr=Array.from(arrayLike)
console.log(arr)
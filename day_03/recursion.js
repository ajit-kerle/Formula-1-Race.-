// recusrion stack

// power(2,4) : 16
// power(2,3) : 8
// power(2,2) : 4

// function pow(x,n){
//     let res=1
//     for(let i=1;i<=n;i++){
//         res=res*x
//     }
//     return res
// }


// recursive approach

// function pow(x,n){
//   if(n===1){
//     return x
//   }
//   return x*pow(x,n-1) 
// }

// console.log(pow(2,3))  
// pow(2,3) =8


// let company = { 
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };

// function sumSalaries(department) {
//    if(Array.isArray(department)){
//     return department.reduce((prev,curr)=>prev+curr.salary,0)
//    }else{
//     let sum=0
//     for(let k of Object.values(department)){
//         sum=sum+sumSalaries(k)
//     }
//     return sum
//    }
// }

// console.log(sumSalaries(company))

// sum of all number

// function sumTo(n){
//   if(n===1){
//     return 1
//   }
//   return sumTo(n-1)+n
// }
// console.log(sumTo(4))

// using arithmatic formula
// function sumTo(n){
//  return n*(n+1)/2
// }
// console.log(sumTo(4))

// calculate factorial
// function facto(n){
//    if(n===1){
//     return 1
//    }
//    return n*facto(n-1)
// }

// console.log(facto(5)) 


// fibonacci numbers

// function fibo(n){
//    if(n<=1){
//     return n
//    }
//    return fibo(n-1)+fibo(n-2)
// }

// console.log(fibo(3))


// =======================================

// Advanced working with functions

// rest parameters and spread operator

// function sumAll(...args){
//    console.log(args)
//    let sum=0
//    for(let arg of args) sum+=arg
//    return sum
// }

// console.log(sumAll(1,2,3))


// function allName(mname,bname,...rest){
//     console.log(arguments[0])
//     console.log(arguments.length)
//     console.log(mname+' '+bname)
//     console.log('rest arr ',rest[0])
// }

// allName('ajit','pratap','kerle','sam')

// let num=[1,8,2,4,9,2]
// let num1=[8,4,9,3,7,60]

// let res=[...num,num1]
// console.log(res)
// console.log(Math.max(...num,...num1))

// let s='str'
// let sa=[...s]
// // console.log(...s)
// console.log(sa)

// console.log(Array.from(s))

// let arr=[1,2,3]
// let arrCopy=[...arr]
// console.log(JSON.stringify(arr)===JSON.stringify(arrCopy))
// console.log(arr===arrCopy)


// object 
// let obj = { a: 1, b: 2, c: 3 };

// let objCopy={...obj}

// console.log(obj===objCopy)

// console.log(JSON.stringify(obj)=== JSON.stringify(objCopy))



// ================================================

// Variable scope, closure

// function makeCounter(count){
//     let c=0

//     return function(){
//         return c++
//     }
// }

// let counter=makeCounter()
// let counter1=makeCounter()

// console.log(counter())
// console.log(counter())

// console.log(counter1())


// =====================================
// var is functional and global scoped
// var can be redeclare 
// var applied hoisting
//=========================================




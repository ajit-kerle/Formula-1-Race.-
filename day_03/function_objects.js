// Function object, NFE

// function sayHi(){
//     return 'hello'
// }

// console.log(sayHi.name)

// let sayHi=function (){
//     return 'heloo'
// }
// console.log(sayHi.name)

// assignment done via default value

// function fn(sayHi=function (){
//     return 'jello '
// }){
//     console.log(sayHi.name)
// }
// console.log(fn())

// object method also have name

// let user={
//     sayHi(){
//         console.log('hello hi')
//     },
//     sayBye(){
//         console.log('hello bye')
//     }
// }

// console.log(user.sayBye.name)

// function inside array

// let arr=[function (){return 'hello array'}]

// console.log(arr[0].name)

// length property for function

// function sayHi(...a){
//     return 'hello'+a

// }
// console.log(sayHi.length)

// =====================================================
// NFE named function expression

// let sayHi=function(){
//     return 'sayHi'
// }

// console.log(sayHi())


// let sayHi=function func(){
//     return 'sayHi'
// }

// console.log(sayHi.name)
// console.log(sayHi())
// console.log(func()) not defined error


// NFE 

// let sayBye=function func(who){
//      if(who){
//         console.log(`hello ${who}`)
//      }else{
//         func('guest')
//      }
// }

// sayBye()


// new way to create function and we used rarely

// let newFunc=new Function('a','b','console.log(a+b)')
// console.log(newFunc(10,20))



//==============================================
// Scheduling: setTimeout and setInterval


// setTimeout(func,delay)

// let sayHi=()=>{
//     console.log('hello world')
// }

// setTimeout(sayHi,1000)

// let timerId=setTimeout(()=>{console.log('i am arrow function')},1000)
// console.log(timerId)
// clearTimeout(timerId)
// let count=0
// setInterval(()=>{console.log(count++)},1000)

// setInterval implementationusing setTimeout

// setTimeout(function tick(){
//     console.log('tice') 
//     setTimeout(tick,2000)
//     },2000)



// confused syntax 

// let sayBye=function func(who){
//      if(who){
//         console.log(`hello ${who}`)
//      }else{
//         func('guest')
//      }
// }


// console.log(sayBye.name)

// let a={name:'sam'}

// two way of creating Objects 
// let user = new Object(); // "object constructor" syntax
// let users = {
//     name:'pratap',
//     age:23
// };  // "object literal" syntax

// user.name='ajit'
// user.age=23
// console.log(user)

// console.log(users)

// delete user.age
// console.log(user)

// property value shorthand

// let person={
//     name:'ajit',
//     age:23,
// }
// console.log(person)

// function obj(name,age){
//    return {
//     name:name,
//     age:age,
//    }
// }

// function obj(name,age){
//    return {
//     name,
//     age,
//    }
// }

// console.log(obj('ajit',28))

const person={
    for:1,
    let:5,
    console:5,
    noSuch:undefined
}

// console.log(typeof person.for)

// for(let i=person.for ;i<person.let;i++){
//     console.log(i)
// }


// let fruits={
//     name:'mango'
// }

// fruits.__proto__=10
// console.log(fruits)
// console.log(fruits.__proto__)

// console.log('for' in person)
// console.log('rof' in person)

// console.log('noSuch' in person)

// =====================================================

// for ...in loop // 
// for(key in person){
//     console.log(key)
// }


// return true if object empty
// let obj1={
// }

// function isEmpty(obj1){
//     for(let key in obj1){
//         return false
//     }
//     return true
// }

// console.log(isEmpty(obj1))

// code for sum of salary
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum=0
// for(let sal in salaries){
//     sum=sum+salaries[sal]
// }
// console.log(sum)

// multiply numeric property value by 2
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// for(let key in menu){
//     if(typeof menu[key] =='number'){
//     // console.log(key)
//     // console.log(key)
//     // menu[key]*=2
//     // console.log(menu[key])
//     }
    
// }
// console.log(menu)


let user={name:'ajit',address:{street:'xyz'}}
let obj=user

// user=null
obj=null
console.log(user)
console.log(obj)
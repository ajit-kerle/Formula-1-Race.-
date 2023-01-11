// "use strict";
//  num = 5; 
// var a=10
// console.log(a)
// console.log(num)

// function abc(a,b,b){
//     return a+b+b
// }
// const res=abc(1,2,3)
// console.log(res)

// let fname = 'John'
//   , age = 25
//   , greet = 'Happy';
//   console.log(fname)
//   console.log(age)
//   console.log(greet)


// variable and function scope in js
// let , var , const 
 
//  let name='ajit'
//  let admin='john'

// //  admin=name
//  console.log(admin)
// //  admin='sam'
//  console.log(admin)

// data types 
// 1. String 
// 2. Number
// 3. BigInt  // add n at end to make it BigInt
// console.log(9007199254740991 + 5);
// 4. Boolean 
// 5. Null
// 6. undefined
// 

// let isGreater=40>20
// console.log(isGreater)

// typeof operator

// console.log(typeof undefined)  // undefined
// console.log(typeof null)  // object
// console.log(typeof 5)  // number
// console.log(typeof 'string') // string
// console.log(typeof true) // boolean
// console.log(typeof {name:'ajit'}) // object
// console.log(typeof [1,2,3]) // object
// console.log(typeof 10n) // bigint
// console.log(typeof Math) // object 
// console.log(typeof Symbol('id')) // symbol

// console.log(`i am ${1}`)
// console.log(`i am ${'2'}`)

//  two operator % and **
// console.log(5%2) 
// console.log(5/2) 
// console.log(4%2) 
// console.log(2**6)
// console.log(16**(1/2)) // sqrt formula

// let a,b,c;
// a=b=c=2+2
// console.log(a)
// console.log(b)
// console.log(c)

// =================================
// preincrement, postincrement


let inc=2
// postinvrement 
// console.log(inc++) // 2
// console.log(inc)   // 3 

// preincrement
// console.log(++inc) // 3
// console.log(inc)    // 3



// comma operator
// let x=(1+2,35+35) // last value return 
// console.log(x)

// assignment opeartor 
// let a = 2;

// let x = 1 + (a *= 2);
// console.log(x)  // x = 5

// typeconversion examples
// console.log("" + 1 + 0) 10
// console.log("" - 1 + 0) -1
// console.log(true + false) 1
//  console.log(6 / "3") 2
// console.log("2" * "3") 6
// console.log(4 + 5 + "px") 9px
// console.log("$" + 4 + 5) $45
// console.log("4" - 2)   2
// console.log("  -9  " + 5) -95
// console.log("  -9  " - 5) -14
// console.log(null + 1) 1
// console.log(undefined + 1) NaN
// console.log(" \t \n" - 2) -2


// type conversion
// console.log( null > 0 ) // false
// console.log( null == 0 )  // false
// console.log( null >= 0 )  // true
// console.log(undefined > 0)
// console.log(undefined < 0)
// console.log(undefined == 0)


// let isCorrect=(100<50) ? true : (50>10) ? 'second if true' : false
let youCanDrive=(18>18)
console.log(isCorrect)

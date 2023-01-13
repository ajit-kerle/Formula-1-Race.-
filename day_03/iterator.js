// Object.keys, values, entries

// let user={
//     name:'ajit',
//     age:23,
//     number:'9370648158'
// }

// console.log(user)
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// let arrKeys=Object.keys(user)
// let arrValues=Object.values(user)
// console.log(arrValues)
// console.log(arrKeys)

// for(let k of arrKeys){
//     console.log(k)
// }
// for(let k of arrValues){
//     console.log(k)
// }


// Transforming objects
// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// console.log(prices)
// very imp method
// let res=Object.fromEntries(Object.entries(prices).map(entry=>[entry[0],entry[1]*2]))

// console.log(res)


//========================================
// task 

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// const sumSalaries=(salaries)=>{
//     let arrVal=Object.values(salaries)
//     let sum=0
//     for(let val of arrVal){
//         sum+=val 
//     }
//     return sum
// }

// console.log(sumSalaries(salaries))

// task 2 
// count properties
let user={
    name:'john',
    age:30,
}

const count=(user)=>{
    // let c=0
    let res=Object.keys(user)
    return res.length
}

console.log(count(user))
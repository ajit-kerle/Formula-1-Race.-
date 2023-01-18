// generators

// Generators can return (“yield”) multiple values, one after another, on-demand.

// function* genFunction(){
//     yield 1;
//     yield 2;
//     yield 3;
//     // return 10;
//     yield 100;
// }

// let gen=genFunction()

// console.log(gen)

// for(let data of gen){
//     console.log(data)
// }

// let arr=[...gen]
// console.log(arr)
// next function executes first yeilds
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())


// generators

// function* gen(){
//     let sum=0

//      while(true){
//         sum=sum+1
//         yield sum;
//      }
// }

// let g=gen()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())


// =============================
// async generator

var fruits=['mango','banana','apple','kiwi']

async function fn(){
   for await( value of fruits){
    console.log(value)
}
}

console.log('before loop')
fn()
console.log('after loop')

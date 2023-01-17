// generators function

// function* numberNum(){
//     let n=1
//     while(true){
//         yield n++
//     }
// }

// let num=numberNum()
// console.log(num.next())

// generator

// function* func(){
//     yield 'hello world';
//     yield 'say hi';
//     yield 'good night'
// }

// let f=func()
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())

// function* f1(name){
//    yield `i am f1 in ${name}`
// }
// function* fn(name){
//    yield 'hi';
//    yield f1(name);
//    yield 'bye'
// }

// let ff=fn('ajit')
// console.log(ff.next())
// console.log(ff.next())


function* fullname(){
   console.log('hi firstname ',yield)
   console.log('hi middlename ',yield)
   console.log('hi lastname ',yield)
}

let fname=fullname()

console.log(fname.next('sam'))
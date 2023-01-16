// object in depth


// we are writing redundant code  

// let student={
//     name:'ajit',
//     lastname:'kerle',
//     birth:2000,
//     sayHi(){
//         // console.log('hello sayhi')
//         return this.name+' '+this.lastname
//     }
// }
// let teacher={
//     name:'anil',
//     lastname:'kerle',
//     birth:1996,
//     sayHi(){
//         // console.log('hello sayhi')
//         return this.name+' '+this.lastname
//     },
//     getAge:function(){
//      let age=new Date().getFullYear()-this.birth
//      return age
//     }
// }

// // console.log(student.lastname)
// // console.log(student.name)
// console.log(student.sayHi())
// console.log(teacher.sayHi())
// console.log(teacher.getAge())

let user={
    sayHi(){
        // console.log('hello sayhi')
        return this.name+' '+this.lastname
    },
    getAge:function(){
     let age=new Date().getFullYear()-this.birth
     return age
    }
}

let teacher={
    name:'soni',
    lastname:'kerle',
    birth:2000
}
let student={
    name:'ajit',
    lastname:'kerle',
    birth:1998
}

student.__proto__=user;
teacher.__proto__=user;

console.log(teacher.getAge())
console.log(student.getAge())


// data catalogue 
// data governace 
// data quality  : 1. data profiling 

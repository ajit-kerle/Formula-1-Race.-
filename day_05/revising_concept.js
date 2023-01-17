// revising concepts


// using function
// function User(){
//     this.name='ajit'
//     this.age=23
// }

// let u=new User()
// console.log(u.name)

// using classes
// class User{
//     constructor(){
//         this.name='ajit'
//         this.age=23
//     }
// }

// let us1=new User()
// console.log(us1.name)
// console.log(us1.age)


// class inheritance

// class Person{
//     constructor(name){
//      this.name=name
//     }
//     greet(){
//         console.log(`hello ${this.name}`)
//     }
// }

// // extending person
// class Student extends Person{
    
// }

// let stu=new Student('sam')

// // console.log(stu.greet())
// // console.log(stu.name)


// super() keyword is in class inheritance 
// class Person{
//     constructor(name){
//      this.name=name
//     }
//     greet(){
//         console.log(`hello ${this.name}`)
//     }
// }

// class Student extends Person{
//     constructor(name,age){
//         // console.log('student constructor is called')
//         super(name)
//         this.age=age
//     }

//     greet(){
//        console.log(`hello ${this.name}`)
//        console.log(`my age  ${this.age}`)
//     }

// }

// let stu=new Student('ajit',23)
// // console.log(stu.name)
// console.log(stu.greet())


// public , private , protected 

class Person{
    #name;
    constructor(){
        this.#name='ajit'
        this._age=23
    }

    greet(){
        console.log(`hello ${this.#name}`)
    }

    #sayHi(){
       console.log(`welcome ${this.#name}`)
    }
}

class Student extends Person{
    // constructor(){

    // }
    showAge(){
        console.log(`my age is ${this._age}`)
    }

}

let stu=new Student('ajit')

console.log(stu._age)
console.log(stu.greet())

let pers=new Person() 


// console.log(pers.greet())
// console.log(pers.name)
// console.log(pers.sayHi())
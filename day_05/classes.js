// classes 

// class User{
//     constructor(name){
//       this.name=name
//     }

//     sayMyName(){
//         return `hello ${this.name}`
//     }
// }

// let user1=new User('ajit')
// console.log(typeof user1)
// console.log(user1)
// console.log(user1.name)
// console.log(user1.sayMyName())
// console.log(user1.sayMyName())
// console.log(typeof user1)
// console.log(typeof User)

// function letUse(){
//     return 'hello'
// }

// let k=new letUse()
// console.log(k)

// =============================


// class User{
//     constructor(name){
//         this.name=name
//     }
//     sayHi(){
//         return this.name
//     }
// }

// let us=new User('ajit')
// console.log(us)
// console.log(us.prototype)
// console.log(User.prototype)
// console.log(User===User.prototype.constructor)

// console.log(Object.getOwnPropertyNames(User.prototype)) // to get proprty name


// ==================================================
// classes expression

// let user =class{
//     sayHi(){
//         return 'hello'
//     }
// }
// console.log(new user().sayHi())

// class expression

// 1. Class can assign

let user =class MyClass{
    sayHi(){
        return 'hello'
    }
}

// console.log(new user().sayHi())
// console.log(MyClass())

// 2. we can return class  

// function myFuc(phrases){
//     return class {
//         sayHi(){
//             return 'i am in class'+phrases
//         }
//     }
// }

// let simFunc=myFuc('function')
// console.log(new simFunc().sayHi())



// 3. getters and setters can 

// class User{
//     constructor(name){
//         this.name=name
//     }

//     get name(){
//         return this._name
//     }

//     set name(name){
//         this._name=name
//     }
// }

// let u1=new User('ajit')

// console.log(u1.name)



//=============================================

// 3. If we are creating variable without this keyword this will not assign in prototype

// class User{
//     name='ajit'
//     constructor(){

//     this.lname='sam'
//     }
// }

// let u=new User()
// console.log(u.name)
// console.log(User.prototype.name) // we are getting undefined



// ============================================================
// losing this error

// class Button{
//     constructor(val){
//       this.value=val
//     }

//     click(){
//         // console.log(this.value)
//         // return this.value
//         alert(this.value)
//     }
// }

// let button=new Button('ajit')

// setTimeout(button.click(),5000)
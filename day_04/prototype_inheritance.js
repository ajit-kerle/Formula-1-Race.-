//  prototype inheritance

// let animal={
//     eats:true,
//     walk(){
//       console.log('animal walk')
//     }
// }

// let rabbit={
//     jumps:true,
//     __proto__:animal
// }

// rabbit.__proto__=animal
// console.log(animal)
// console.log(rabbit.eats)

// let longJump={
//     jump_length:'10m',
//     __proto__:rabbit
// }

// console.log(longJump.walk())
// console.log(longJump)


// let user={
//     name:'ajit',
//     surname:'kerle',
//     get fullname(){
//         return `${this.name} ${this.surname}`
//     },
//     set fullname(value){
//       [this.name,this.surname]=value.split(" ")
//     }
// }

// console.log(user.fullname)
// user.fullname='sam karan'
// console.log(user.fullname)

// let Admin={
//     __proto__:user,
//     isAdmin:true
// }
// console.log(Admin.fullname)


// Admin.fullname="sam karan"
// console.log(Admin.fullname)
// console.log(user.fullname)


// ===============================================================================================
// No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.
//=============================================================================================

// let animal={
//     walk(){
//         if(!this.isSleeping){
//           console.log('i have to walk')
//         }
//     },
//     sleep(){
//         isSleep=true
//     }
// }

// animal.walk()

// let rabbit={
//     __proto__:animal,
//     name:'white rabbit'
// }

// If we had other objects, like bird, snake, etc., inheriting from animal, they would also gain access to methods of animal. But this in each method call would be the corresponding object,

// rabbit.sleep()
// console.log(rabbit.walk())
// console.log(animal.walk())

// methods are shared, but the object state is not.

// =======================================================

// for .. in loop 

// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// console.log(Object.keys(rabbit)) // it will show its own props


// for(let p in rabbit){ // for in inherit all keys from parent also
//     // console.log(p) 
//     let isOwn=rabbit.hasOwnProperty(p)

//     if(isOwn){
//         console.log('i am inherited in rabbit '+p)
//     }else{
//         console.log('i am not in animal '+p)
//     }
// }

// But why does hasOwnProperty not appear in the for..in loop like eats and jumps do, if for..in lists inherited properties?



// =======================================================

// task Prototypal inheritance

// let animal={
//     jump:null,
// }

// let rabbit={
//     jump:true,
//     __proto__:animal
// }

// console.log(rabbit.jump)
// delete rabbit.jump
// delete animal.jump
// console.log(rabbit.jump)

// =========================================

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3,
//   __proto__:head
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__:table
// };

// let pockets = {
//   money: 2000,
//   __proto__:bed
// };

// console.log(pockets.pen)
// console.log(bed.glasses)
// console.log(table.money)

// ==============================================

// task - 3
// let animal={
//   eat(){
//     this.full=true
//   },
// }
// let rabbit={
//   __proto__:animal
// }

// console.log(rabbit.eat())

// =======================================================

// let hamster={
//   stomach:[],
//   eat(food){
//     this.stomach.push(food)
//   }
// }

// let speedy={
//   __proto__:hamster,
//   stomach:[]
// }

// let lazy={
//   __proto__:hamster,
//   stomach:[]
// }

// speedy.eat('mango')
// lazy.eat('banana')
// hamster.eat('grapes')
// console.log(hamster.stomach)
// console.log(lazy.stomach)
// console.log(speedy.stomach)


// ===========================
// let animal={
//   eats:true,
// }

// function Rabbit(name){
//   this.name=name
// }

// Rabbit.prototype=animal

// let rabbit=new Rabbit('white rabbit')

// // console.log(rabbit)
// console.log(rabbit.eats)

// function Base(name){
//   this.name=name
// }

// Base.prototype={
//   jump:true
// }

// let base=new Base('sam')

// console.log(base.jump)
// delete base.jump

// delete Base.prototype.jump
// console.log()
// base.jump=false
// base.jump={}
// delete base.jump
// Base.prototype.jump=false
// console.log(base.jump)
// console.log(Base.prototype.constructor)



// ==============================================

// function User(name){
//   this.name=name
// }

// User.prototype={jump:true}
// console.log(User.prototype)

// let user=new User('ajit')

// // console.log(user)
// let user2=new user.constructor('sam')
// console.log(user2.name)


// ===========================================================

// let obj={}
// let obj1=new Object()
// console.log(obj)
// console.log(obj1)
// console.log(Object.prototype)


// ========================================

// new method to create prototype
// let animal={eats:true}

// console.log(animal)
// let rabbit=Object.create(animal,{jumps:{value:true}})  // it inherita from animal object
// console.log(rabbit.eats)
// console.log(rabbit.jumps)

// =======================================
// let dictionary=Object.create(null,{toString:{value(){return Object.keys(this).join()}}}) // simple object without prototype
// console.log(dictionary)

// dictionary.apple='Apple'
// // console.log(dictionary)
// dictionary.__proto__ = "test";
// console.log(dictionary)

// for(let k in dictionary){
//   console.log(k)
// }


















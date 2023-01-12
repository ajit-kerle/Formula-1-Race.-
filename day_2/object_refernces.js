// Object references and copying
// let user = { name: "John" };

// let admin =JSON.parse(JSON.stringify(user)); // copy the value using stringify
// let admin =user; // copy the reference

// user.name='ajit'
// console.log(user)
// console.log(admin)

// let a={}
// let b=a
// console.log(a==b)
// console.log(a===b)
// let o1={}
// let o2={}
// console.log(o1===o2)


// ===================================================
// 1. Cloning and merging, Object.assign
// let person={name:'ajit',age:23}

// let clone={}
// for(let key in person){
//     clone[key]=person[key]
// }

// console.log(clone)
// clone.age=50
// console.log(clone)


// 2. let admin =JSON.parse(JSON.stringify(user)); // copy the value using stringify

// 3. using Object.assign(destination obj,source copy)
// let privacy={about:'i am ajit'}
// Object.assign(person,{canView:true},privacy)
// console.log(person)

// privacy.about='good luck'
// console.log(person)
// console.log(privacy)


// ==================================================
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

// 1. using JSON.parse(JSON.stringify(user));
// let clone=JSON.parse(JSON.stringify(user));
// clone.name='ajit'
// clone.sizes.height=250
// console.log(user)
// console.log(clone)

// 2. Object assign
// let obj1={}
// Object.assign(obj1,user)
// // obj1.name='ajit'
// obj1.sizes.height=250
// console.log(obj1)
// console.log(user)
// console.log(user===obj1)
// console.log(user.sizes===obj1.sizes) // true to do nested copy
// for nested cloning we have to use [let clone = structuredClone(user);]


// ==================================================================
// Object methods, "this"
// let users={
//    name:'ajit',
//    age:23,
//    sayHi(){
//     console.log('i am '+users.name+' age is '+users.age)
//    }
// }

// let admin=users
// users=null

// admin.sayHi()


// this is not bound it execute on runtime
// let users={name:'ajit'}
// let admin={name:'admin'}

// function sayHi(){
//     console.log(this.name)
//     return ''
// }

// users.f=sayHi
// admin.f=sayHi

// console.log(users.f())
// console.log(admin.f())

// ======================================
// arrow function not have this keyword

// const outer={
//     name:'ajit',
//     sayHi(){

//     let arrow=()=>{
//         console.log(this.name)
//     }
//     arrow()
//     }

    
// }
// console.log(outer.sayHi())

// =======================================
// Using "this" in object literal

// function makeUser(){
//     return {
//         name:'ajit',
//         hello:this
//     }
// }

// let res=makeUser()
// console.log(res.hello.name)

// ===========================================
// calculator in object
// let calculator={
//     sum(){
//         return this.a+this.b
//     },
//     sub(){
//         return this.a+this.b
//     },
//     a:10,
//     b:20
// }

// console.log(calculator.sum())

// ==================================================
// let ladders={
//     step:0,
//     up(){
//         this.step++
//     },
//     down(){
//         this.step--
//     },
//     showStep(){
//         console.log(this.step)
//     }
// }

// ladders.up()
// ladders.up()
// ladders.up()
// ladders.up()
// ladders.down()
// ladders.showStep()


// ==================================================
// Constructor, operator "new"

// function Func(){
//     this.name='sa'
//     this.age=23
// }

// let fn=new Func()
// let fn=Func()

// console.log(fn)
// console.log(fn.name)

// ========================================================
// Optional chaining '?.'

// let users={
//     name:'ajit',
//     address:{
//         street:'gateway'
//     }
// }
// console.log(users.address.street.city.no) to avoid error we use optinal chaining
// console.log(users.address.street?.no?.city)
// console.log(users.address.street.no.city) 

// =====================================================
// symbol is primitive datatypes
// let sym=Symbol('my id')
// let sym2=Symbol('my id2')
// console.log(sym)
// console.log(sym2)
// let myObj={}
// myObj[sym]='ajit'
// myObj[sym2]='kerle'
// console.log(myObj)
// console.log(myObj[sym])
// for .. in cannt iterate symbol key 

// =========================================================

// primitive methods 
// let str='hello'
// console.log(str)
// console.log(str.test)


// to fixed method
// let i=1.29452
// console.log(i.toFixed(2))

// ====================================
// Number 
// let num=10000
// let n=10_000 // readable
// console.log(n)
// console.log(num)

// usage of e 
// let n=1e3   // e stands for zero and 3 stands for number of zero
// console.log(n)

// floor, ceil , round
// let i=10.56
// console.log(Math.floor(i))
// console.log(Math.ceil(i))
// console.log(Math.round(i))

// console.log(isNaN('str'))
// console.log(isNaN(i))

// let inf=1e500
// console.log(isFinite(inf))


// let pi='100px'
// let pi='100.00'
// console.log(parseInt(pi))
// console.log(parseFloat(pi))

// math
// console.log(Math.round(Math.random()*10))

//===================================

// string 
// let guestList = "Guests:\n * John\n * Pete\n * Mary";
// console.log(guestList)
let str='welcome to js  el fundametals'
// console.log(str[0])
// console.log(str.at(4))

// console.log(str.indexOf('to'))
// console.log(str.lastIndexOf('el'))
// console.log(str.includes('js'))
// console.log(str.startsWith('we'))
// console.log(str.endsWith('ls'))

// slice
// let s='hello'
// console.log(s.slice(0,1))
// console.log(s.substring(0,1))
// console.log(s)

// console.log('India'.localeCompare('India'))
// console.log('India'.localeCompare('Newzland'))
// console.log('India'.localeCompare('ind'))

// array

// let arr=[]
// arr[10]=10
// // arr.test=5
// // arr['k']=5
// console.log(arr)
// console.log(arr.length)


// delete 
// let arr = ["I", "go", "home"]

// delete arr[1]
// console.log(arr)
// console.log(arr.splice(1,1))
// console.log(arr)

let names = 'Bilbo, Gandalf, Nazgul';

// let arr = names.split(', ');
// console.log(arr.join(", "))
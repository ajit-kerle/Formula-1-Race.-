// object property flags

// let person={
//     name:'sam',
//     age:25
// }

// console.log(person)
// let descriptor=Object.getOwnPropertyDescriptor(person,'age') // to get extra metadata of objects props
// console.log(descriptor)

// console.log(JSON.stringify(descriptor,null,2))

// let users={}

// Object.defineProperty(users,'lname',{value:'sameer',writable:false,
// enumerable: true,
// configurable: true})
// let descriptor=Object.getOwnPropertyDescriptor(users,'name');

// console.log(descriptor)
// console.log(JSON.stringify(descriptor,null,2))
// users.lname='pete'
// console.log(users)

// for(let k in users){
//     console.log(k)
// }
// for(let k of Object.keys(users)){
//     console.log(k)
// }


// ===================================

// let user={
//     name:'ajit',
//     toString(){
//         return this.name;
//     }
// }
// for(let k in user){
//     console.log(k)
// }

// after changing flags enumarable

// Object.defineProperty(user,'toString',{
//     enumerable:false
// });

// for(let k in user){
//     console.log(k)
// }

// console.log(Object.keys(user))

// if enumerable : false we cant enumerat using for..in and Object.keys()  methods and other 


// non - Configurable

// A non-configurable property can’t be deleted, its attributes can’t be modified.


// example of that is Math.pi=3.141 this is not configurable 


// let descriptor=Object.getOwnPropertyDescriptor(Math,'PI');

// Math.PI='3.16'

// console.log(JSON.stringify(descriptor,null,2))
// console.log(Math.PI)

// we cant change once it non configurable

// Object.defineProperty(Math, "PI", { writable: true });

// ================================================
// Please note: configurable: false prevents changes of property flags and its deletion, while allowing to change its value.
//==================================================

// Object.defineProperty(user,'name',{configurable:false,  writable: false,})

// console.log(user)
// user.name='pete'
// console.log(user)

// delete user.name;
// user.name='sonu'
// console.log(user)

// ==================================
// let obj={name:'sam',age:23}

// let discriptors=Object.getOwnPropertyDescriptors(obj)

// console.log(discriptors)

// for(let val in discriptors){
//     console.log(obj[val])
// }

// let clone = Object.defineProperties(obj, Object.getOwnPropertyDescriptors(obj));

// console.log(clone)

// ==============================================

// let cars={
//     brand:'honda',
//     prize:20000
// }

// Object.preventExtensions(cars)

// cars.owner='sam'

// console.log(cars)

// Object.freeze(cars)

// cars.owner='vishal'


// console.log(cars)


// ===============================================
// getters and setters

// let cars={
//     brand:'honda',
//     owner:'sri',
//     prize:20000,
//     offer:10,
    // simple method of object 
    // discountprize: function(){
    //     return (this.prize/100)*10
    // }

    // getters method accessing like props
    // get discountPrize(){
    //     return (this.prize/100)*10
    // },
    // // 
    // set discountPrize (value){
    //     console.log(value)
    //     this.offer=Number(value)
    // }
// }

// console.log((1000/100)*12)
// console.log(cars.discountprize())
// console.log(cars.discountPrize)
// cars.offer=4000
// cars.discountPrize=40
// console.log(cars)

// console.log(cars)

// =========================================================

// getters and setters for props

// let user={
//     name:'ajit',
//     surname:'kerle'
// }

// Object.defineProperty(user,'fullname',{
//     get(){
//         return `${this.name} ${this.surname}`
//     },
//     set(value){
//         [this.name,this.surname]=value.split(" ")
//     }
// })

// console.log(user.fullname)

// for(let k in user){
//     console.log(k)
// }

// =================================================

// let user={
//     get name(){
//         return this._name
//     },
//     set name(val){
//         if(val.length<4){
//             console.log(`name will be greater than 4 character`)
//             return;
//         }
//         this._name=val
//     }
// }
// user.name='a'
// console.log(user.name)

// =============================================

// function User(name,birthday){
//     this.name=name
//     this.birthday=birthday

//     Object.defineProperty(this,'age',{
//         get(){
//             let currYear=new Date().getFullYear()
//             return currYear-this.birthday.getFullYear()
//         }
//     })
// }

// let ajit=new User('ajit',new Date(2000,05,13))

// console.log(ajit.birthday)
// console.log(ajit.age)


// ======================================================


// class inheritance

// class Animal{
//     constructor(name){
//       this.speed=0
//       this.name=name
//     }

//     run(speed){
//         this.speed=speed
//         console.log(`${this.name} animal run with speed ${this.speed}`)
//     }

//     stop(){
//         this.speed=0
//         console.log(`${this.name} animal is stop with ${this.speed}`)
//     }
// }

// let animal=new Animal('Dog')



// animal.run(455)
// animal.stop()


//   rabbit class extends animal class

// class Rabbit extends Animal{
//     hide(){
//         console.log(`${this.name} can also hide!`)
//     }
// }

// let rabbit=new Rabbit('rabbit')
// rabbit.hide()
// rabbit.run(100)
// rabbit.stop()

// method overriding 

// class Rabbit extends Animal{
//     hide(){
//         console.log(`${this.name} can also hide!`)
//     }
//     stop(){
//         super.stop()
//         // this.hide()
//     }
//     run(){
//         // super.run(100)
//         setTimeout(()=>super.run(100),2000)
//     }
// }

// let rabbit=new Rabbit('rabbit')
// // rabbit.hide()
// // rabbit.stop()
// rabbit.run()


// =================================================
// constructor overriding

// class Animal{
//     constructor(name){
//        this.name=name
//        this.speed=0
//     }

//     run(speed){
//      this.speed=speed
//     }

//     stop(){
//         this.speed=0
//     }
// }

// class Rabbit extends Animal{
//     constructor(name,earLength){
//         super(name)
//         // this.name=name
//         this.earLength=earLength

//     }
// }

// let rabbit=new Rabbit('rabbit',10)
// console.log(rabbit.name)
// console.log(rabbit.earLength)


//========================================
// class field overriding
// class Animal {
//     name='animal'
//     constructor(){
//         console.log(this.name)
//     }
// }

// class Rabbit extends Animal{
//     name='rabbit'
// }

// new Animal()
// new Rabbit()


// difference
// class Animal{
//     showName(){
//         console.log('Animal')
//     }
//     constructor(){
//      this.showName()
//     }
// }

// class Rabbit extends Animal{
//     showName(){
//         console.log('rabbit')
//     }
// }

// new Animal()
// new Rabbit()


//=====================================================
// Inheritance of static properties and methods

class Animal{
    static planet='Earth'
    constructor(name,speed){
        this.speed=speed
        this.name=name
    }

    run(speed=0){
       this.speed+=speed;
       console.log(`${this.name} runs with speed ${this.speed}`)
    }
    static compare(animalA,animalB){
        return animalA.speed -animalB.speed
    }

}

class Rabbit extends Animal{
    hide(){
        console.log(`i can hide also`)
    }
}

let rabbits=[
    new Rabbit("white rabbits",10),
    new Rabbit("black rabbits",5),
]

console.log(rabbits)

rabbits.sort(Rabbit.compare);
// console.log(rabbits)
rabbits[0].run()
console.log(Rabbit.planet)
//  prototype inheritance

let animal={
    eats:true,
    walk(){
        
    }
}

let rabbit={
    jumps:true
}

rabbit.__proto__=animal
// console.log(animal)
console.log(rabbit.eats)
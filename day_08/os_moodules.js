// const path=require('path')

// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))
// console.log(path.join(__dirname,'files'))
// console.log(path.extname(__filename))





//=================================================
// generators

// function* simpGen(){
//     console.log('hello callstack..')
//     while(true){
//         yield simpGen()
//     }

// }

// function gen(){
//     console.log('hello')
//    return gen()
// }


// let gen=simpGen()
// gen.next()
// gen.next()
// gen()

// const teams={
//     team:1,
//     size:5,
//     name:'blue',
//     leader:'sam'
// }


// practical use case of generators

// function* radomGen(team){
//     yield team.team;
//     yield team.size;
//     yield team.name;
// }

// let gen=radomGen(teams)

// console.log(gen.next())
// for(let val of gen){
//     console.log(val)
// }




function* pseudoRandom(seed) {
    let value = seed;
  
    while(true) {
      value = value * 16807 % 2147483647;
      yield value;
    }
  
  };

  
  let generator = pseudoRandom(1);
  
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

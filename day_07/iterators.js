// iterators

let person=['virat','warner','sam','msd','ajit']


// inbuilt interators
let iterPerson=person[Symbol.iterator]();
console.log(iter.next())

//============================================
function interator(person){
    let ind=0
    return {
        next:function(){
            if(ind <person.length){
          return {
            value:person[ind++],
            done:false
          }
            }else{
                return {
                    done:true
                }
            }
        }
    }
}

let iter=interator(person)

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
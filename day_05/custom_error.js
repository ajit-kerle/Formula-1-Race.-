// custom error 


// custome validation class inherting Error class
class ValidationError extends Error{
    constructor(message){
       super(message)
       this.name='ValidationError'
    }
}


// prasing function

function readUser(obj){
   let user=JSON.parse(obj)
   if(!user.name){
    throw new ValidationError('No field: name')
   }
   if(!user.age){
    throw new ValidationError('No field : age')
   }
   return user
}

try{
   let user=readUser('{"age":23}')
}catch(err){
   if(err instanceof ValidationError){
   console.log('Validation error '+err.message)
   }else if(err instanceof SyntaxError){
    console.log('Syntax error '+err.message)
   }else{
    throw err;
   }
}



// inherit from syntax error

class FormatError extends SyntaxError{
    constructor(message){
        super(message)
        this.name=this.constructor.name
    }
}

let err=new FormatError('Formatting error')
console.log(err.message)
console.log(err.name)
// console.log(err.stack)
console.log(err instanceof FormatError)
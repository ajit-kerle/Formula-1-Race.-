// Example 1: Implicit Conversion to String
// let result;
// console.log(typeof result) undefined

// result='3'+2  // 
// console.log(typeof result)


// implicit conversion to string 
// result=3+'3'
// console.log(result)


// result='3'+undefined
// result='3'+true
// result='3'+null
// console.log(result)
// console.log(typeof result)


// implicit conversion to number

// let result;

// result='4'-'2'
// console.log(typeof result)
// result='5'*2
// console.log(result)
// result='5'%2
// console.log(result)
// result='5'/2
// console.log(result)


// result='two'-'one'
// result='2'-'one'
// console.log(result)

//  Implicit Boolean Conversion to Number


// result='4'-true
// result=4+true
// result=4-false
// console.log(result)
// console.log(typeof result)

// result='0'-true
// result='5'-null
// result='5'/null
// result='5'*null
// result=true+false
// console.log(result)

// result=4+undefined
// result=undefined+true
// result=undefined+null

// console.log(result)


// Explicit Conversion

// let num='324'
// let num=236
// console.log(Number(num))
// console.log(String(num))
// console.log(typeof num)

// let a=2.5
// console.log(a-1.3)
// console.log(Number('324e-1'))

// boolean to number 
// console.log(Number(true))
// console.log(Number(false))
// console.log(String(456))
// console.log(Number(''))
// console.log(Number([]))
// console.log(Number([1]))
// console.log(Number(null))
// console.log(Number(undefined))


// let num='20.01'
// let num='20.01'

// console.log(parseInt(num))
// console.log(parseFloat(num))
// num=+'50.10'
// console.log(num)
// console.log(Math.floor(num))
// console.log(String('20.1'))
// let str=230
// str=String(str)
// console.log(String('20.1'))

// other data type to string conversion
// String(), toString(), 
// let z=null
// let z=undefined
// let x=20
// let x=20.0
// console.log(String(null))
// console.log(Number(undefined))
// console.log(typeof null)
// console.log(x)
// console.log(String(x))

// console.log(z.toString())

// data type coversion to boolean
// console.log(Boolean(null))
// console.log(Boolean({}))
// console.log(Boolean([]))
// console.log(Boolean(""))
// console.log(Boolean(undefined))
// console.log(Boolean("0"))


// conditional statement
// let value = 1

// if (value>0) {
//   console.log(1+'greater than zero')
// } else if (value < 0) {
//   console.log(-1+'less than zero')
// } else {
//   console.log(0+'is equal to zero')
// }


// conditional operator 

// if (true||false) {
//   console.log( 'truthy!' );
// }

// let t=11.00
// if(t>10.00 && t<18.00){
//     console.log('working hours')
// }



// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     break;
//   case 5:
//     alert( 'Too big' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }
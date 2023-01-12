// weakset 
// only stores object
// we cannot iterate
let ws=new WeakSet()

let ob1={name:'ajit'}
let ob2={name:'kerle'}

let arr=[ob1]
ob1=null
console.log(arr[0].name)

// ws.add(ob1)

// ws.add(ob1)
// console.log(ws.has(ob1))
// console.log(ws.has(ob2))
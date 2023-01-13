// weakset 
// only stores object
// we cannot iterate
let ws=new WeakSet()

let ob1={name:'ajit'}
let ob2={name:'kerle'}

// let arr=[ob1]
let arrs=new Set()
// ob1=null

ws.add(ob1)
arrs.add(ob1)

// ob1=null
// console.log(arrs[0].name)

console.log(ws)
console.log(arrs)
arrs.clear()
ws.clear()

console.log(ws.has(ob1))
console.log(arrs)
// ws.add(ob1)
// console.log(ws.has(ob1))
// console.log(ws.has(ob2))
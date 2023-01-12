// map data structure

// 1. map is collection of key value pairs

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

let map=new Map()

console.log(map)

map.set(1,'one')
map.set(2,'two')
// console.log(map)

// console.log(map.get(1))
// console.log(map.get(2))

// console.log(map.has(1))
// console.log(map.has(2))

// let d=map.delete(1)  // return true if deleted
// console.log(map)
// console.log(d)

// console.log(map.clear()) delete all map

// console.log(map.size)

// map iterators

// console.log(map.keys())

// for(let key of map.keys()){
//     console.log(key)
// }
// for(let pairs of map.entries()){
//     console.log(pairs)
// }
// for(let key of map.values()){
//     console.log(key)
// }

// let obj=Object.fromEntries(map)
// console.log(obj)
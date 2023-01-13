// Destructuring assignment

// let arr=['ajit','kerle']

// let [fname,lname]=arr
// console.log(fname)
// console.log(lname)

// let str='ajit kerle'

// let [fname,lname]=str.split(' ')
// console.log(fname)
// console.log(lname)

// let [firstName, , ,title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log(firstName)
// console.log(title)

// let [a,b,c]='123'
// console.log(a)
// console.log(b)
// console.log(c)

// let [x,y]=new Set([10,20])
// console.log(x)
// console.log(y)


// let user={};

// [user.name,user.lname]='ajit kerle'.split(" ")
// console.log(user.lname)

// map

// let map=new Map()
// map.set(1,'one')
// map.set(2,'two')
// console.log(map)

// for(let [k,p] of map){
//     console.log([k,p])
// }

// swap variables

// let a=10
// let b=20

// [a,b]=[b,a]
// console.log(a)
// console.log(b)

// let arr=[1,2,3,4,5]

// let [a,b,...rest]=arr
// console.log(rest[0])

// let [fname,lname]=[]

// console.log(fname)
// console.log(lname)

// let [fname,lname='kerle']=['ajit']
// console.log(fname)
// console.log(lname)

// Object destructuring

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// let {title:t,width:w,height:h}=options
// let {title:t,...res}=options

// console.log(res.width)
// console.log(t)
// console.log(width)
// console.log(height)



/// nsted destructuring

// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// let {size:{width,height},items:[items1,items2],other='other'}=options
// console.log(height)
// console.log(width)
// console.log(items1)
// console.log(items2)
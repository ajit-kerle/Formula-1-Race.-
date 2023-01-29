// let str="0001010111"
let str="111010101000"

// Output : 2
// Minimum number of flips required = 2
// We can flip 2nd bit from 0 to 1 and 9th 
// bit from 1 to 0 to make alternate 
// string “0101010101”


function alternate(str){

   let arr=str.split("")
   let count=0

   for(let i=0;i<arr.length;i++){
    let prevChar=arr[i]
    if(prevChar===arr[i+1] && "0"===arr[i+1]){
       count+=1
    }
   }
   return count
//    return arr
}

console.log(alternate(str))
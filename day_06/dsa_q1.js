//  DSA-1: Find the longest consecutive prime number subsequence in an array i.e. if you an array=[8,9,3,2,5], you output should be 3 as 2,3,5 are the longest consecutive prime number subsequence.

// let array=[7,8,9,3,2,5,23,7,2,67,4,6,16]
// let array=[7,8,9,3,2,5,23,7,2,2,4,6,16,0,11]
let array=[8,9,3,8,2,0,5]
// let array=[1,8,16,0]

function checkPrime(n){
    if(n<2) return false

    if(n===2) return true
    else{
        for(let i=2;i<=n/2;i++){
            if(n%i===0){
                return false
            }
        }
    }
    return true
}

function range(array){
    let max=0
    let count=0
    let ans=[]
   for(let e of array){
    if(checkPrime(e)){        // [8,9,3,8,2,0,5]
        // console.log(e)
        count+=1
        ans.push(e)
        
    }else{
        if(count===0){
            ans=[]
            continue
        }else{
        count=0
        ans=[]
        }
    }
    max=Math.max(max,count)

   }
//    return max
   return ans
}
let res=range(array)
console.log(res)
const fs=require('fs')
const fsPromise=require('fs').promises
const pathh=require('path')



const logEvents=async(msg)=>{
    let year=new Date().getFullYear() // 2023
    let day=new Date().getDay() // monday 0
    let hhrs=new Date().getHours()
    console.log(hhrs)
    // console.log(typeof year)

}
logEvents()
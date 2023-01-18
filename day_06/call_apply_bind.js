//====================
// call 
let student={
    fname:'ajit',
    lname:'kerle',
    age:23,
    // getEmail:function(){
    //     return `${this.fname}${this.lname}@test.com`
    // }
}
let teacher={
    fname:'sam',
    lname:'karan',
    age:32,
    // getEmail:function(){
    //     return `${this.fname}${this.lname}@teacher.com`
    // }
}

// console.log(student.getEmail())

// console.log(student.getEmail.call(teacher))
function getEmail(email1){
    console.log(email1)
    // console.log(email2)
     return `${this.fname}${this.lname}@teacher.com`
}
// console.log(getEmail.call(teacher))
// console.log(getEmail.call(student))
// ===================


//====================
// apply 
// console.log(getEmail.apply(student,['@gmail.com','@yahoo.com']))
//====================
//====================
// bind
let res=getEmail.bind(student,['@gmail.com','@yahoo.com'])
console.log(res())
//====================

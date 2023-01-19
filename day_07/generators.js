// generators

function* generators(array){
    let i=0
    while(true){
        yield i++;
    }
} 


let sg=generators([1,2,3,4,5,6,7])

function getNewId(){
   
   document.getElementById('uniqueId').innerText=sg.next().value
}

// ====================================================
let obj=[
    {email:'ajitkerle70@gmail.com'},
    {email:'pratapkerle70@gmail.com'},
    {email:'samkaran70@gmail.com'},
    {email:'shubmangill70@gmail.com'},
    {email:'klrahul70@gmail.com'}
    // {name:'ajit',email:'ajitkerle70@gmail.com',age:23},
    // {name:'pratap',email:'pratapkerle70@gmail.com',age:26},
    // {name:'samkaran',email:'samkaran70@gmail.com',age:35},
    // {name:'shubman',email:'shubmangill70@gmail.com',age:26},
    // {name:'lokesh',email:'klrahul70@gmail.com',age:20}
]


function* getArrayData(array){
  for(let i=0;i<array.length;i++){
    yield array[i];
  }
  return 
}

let user=getArrayData(obj)

function getNewUser(){
    // console.log(user.next().value)
    // document.getElementById("name").innerText=user.next().value.name
    document.getElementById("email").innerText=user.next().value.email
    // document.getElementById("age").innerText=user.next().value.age
    // alert(user.next().value.email)
}


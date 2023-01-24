const axios=require("axios")

const getuser=async(objId)=>{
    try{
        let endpoint={
            method: 'get',
            url: `http://localhost:9000/getuser/${objId}`
        }
        let result=await axios(endpoint)

        let data=result.data
    
        console.log(data)

    }catch(error){
        console.log("Error in getUser: ",error)
    }
    

}


// get single user accepting user id
// getuser("63cfda87e4ecfc89c82523c3")

// =======================================
// get all users
const getAllusers=async()=>{
    try{
        let endpoint={
            method: 'get',
            url: `http://localhost:9000/getusers`
        }

        let result=await axios(endpoint)

        let data=result.data
    
        console.log(data)

     
    }catch(error){
        console.log("Error in getallusers api: ",error)
    }
}

// getting all users
// getAllusers()

// =======================================================

const deleteUser=async(objId)=>{
   try{

    let endpoint={
        method: 'delete',
        url: `http://localhost:9000/deleteuser/${objId}`
    }
    let result=await axios(endpoint)
    console.log(result.data)


   }catch(error){
    console.log("Error in deleteuser : ",error)
   }
}

// pass userid to delete user
// deleteUser("63cfd22fd63040074d6f42fa")


// ===========================================================

const createuser=async(userObj)=>{
   try{
    let endpoint={
        method: 'post',
        url: `http://localhost:9000/adduser`,
        data:userObj
    }

    let result=await axios(endpoint)
    // console.log(result.data)
    const data=result.data
    console.log(data)


   }catch(error){
    console.log("Error in create user: ",error)
   }
}

let user={
    "username":"sam",
    "fullname":"karan",
    "email":"rcbteam12@gmail.com",
    "phone":"8123648158",
    "gender":"male",
    "password":"Password@123"
}

// pass user object to create data

// createuser(user)


// ===========================================
// update user

const updateuser=async(userObj,id)=>{
    try{
        let endpoint={
            method: 'patch',
            url: `http://localhost:9000/updateuser/${id}`,
            data:userObj
        }
    
        let result=await axios(endpoint)
        // console.log(result.data)
        const data=result.data
        console.log(data)
    
    
       }catch(error){
        console.log("Error in create user: ",error)
       }
}

let updatedata={
    "phone":"9370648158",
}

// pass data to update and userid 
// updateuser(updatedata,"63cfd262d63040074d6f42fb")



// =========================================
// followusers

const followuser=async(followby,followto)=>{
    try{
      let endpoint={
        method:"put",
        url:`http://localhost:9000/user/${followto}/follow`,
        data:followby
      }
      
      let result=await axios(endpoint)
        // console.log(result.data)
        const data=result.data
        console.log(data)

    }catch(error){
        console.log("Error in followuser: ",error)
    }
}

let followby={
    "userId":"63ce59f32c2859ed0706f5e6"
}

// followuser(followby,"63cfd262d63040074d6f42fb")
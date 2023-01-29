const dbconn = require('../db/conn.js') 
const {isValid,isValidEmail,isValidPassword}=require('../utils/validator.js')
const {ObjectId}=require('mongodb')
const bcrypt = require("bcrypt")

const io=require("../index.js")

const mobileRegex = /^[6-9]\d{9}$/

const Users=require('../models/usersSchema.js')

// 1. add user api
const addUser=async (req,res)=>{
  try{

    const reqData=req.body 
    

    if(!Object.keys(reqData).length >0){
      return res.status(400).send({status:400,msg:"please fill required fileds"})
    }


    
    let {username,fullname,email,phone,gender,password}=reqData


    let errstr=""
    if(!isValid(username))  errstr=errstr+"Username " 
    if(!isValid(fullname))  errstr=errstr+"Fullname"
    if(!isValid(email))  errstr=errstr+"email"
    if(!isValid(phone))  errstr=errstr+"phone"
    if(!isValid(gender))  errstr=errstr+"gender"
    if(!isValid(password))  errstr=errstr+"password"
   

    if(!isValid(username) || !isValid(fullname) || !isValid(phone) || !isValid(gender) || !isValid(email)){
        return res.status(400).send({status:400,msg:`${errstr} is can not be empty and null`})
    }

    
    // class intiated 
    const obj1=new Users(reqData)



    if(!mobileRegex.test(phone)) {
        return res.status(400).send({status:400,msg:"Enter valid indian phone number"})
    }
    
    // console.log(!obj1.isValidEmail())
    if(!obj1.isValidEmail()){
        return res.status(400).send({status:400,msg:'Enter valid email'})
    }

    if(!obj1.isValidPassword()){
        return res.status(400).send({status:400,msg:'Enter valid password'})
    }

    let user=await dbconn()
   
    let uniqueemail=await user.findOne({email:email})

    if(uniqueemail){
      return res.status(400).send({status:400,msg:"Email is already registered."})
    }


    // password hashed
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(obj1.password, salt)
    obj1.password=hashedPassword


    
    const result=await user.insertOne(obj1)
    res.status(201).send({status:201,data:result})

  }catch(err){
    console.log('Error in adduser: ',err)
  }
}




// 2. get user api
const getUser=async(req,res)=>{
    try{
        if(ObjectId.isValid(req.params.id)){
        let userid=req.params.id
        let userdb=await dbconn()

        // var socket=io()

    
        let userfound=await userdb.findOne({_id:ObjectId(userid)})

        if(!userfound){
          return res.status(404).send({status:404,msg:"user not found."})
        }
        

        res.status(200).send({status:200,data:userfound})
        }else{
            return res.status(400).send({status:400,msg:"invalid user id"})
        }
    }catch(err){
      console.log('Error in getuser: ',err)
    }
}


// 3. update user :id
const updateUser=async(req,res)=>{
    try{
        if(ObjectId.isValid(req.params.id)){
       let userdb=await dbconn()
       let userid=req.params.id

      let reqbody=req.body

    if(!Object.keys(reqbody).length >0){

      return res.status(400).send({status:400,msg:"Provide something to update"})
    }

    if(req.body.email==="" || req.body.email){
        if(!isValid(req.body.email) || !isValidEmail(req.body.email)){
          return res.status(400).send({status:400,msg:"Provide valid email to update "})
        }
        let uniqueemail=await userdb.findOne({email:req.body.email})

        if(uniqueemail){
          return res.status(400).send({status:400,msg:"Email is already registered."})
        }
    
    }


    if(req.body.phone==="" || req.body.phone){
      if(!isValid(req.body.phone) || !mobileRegex.test(req.body.phone)){
        return res.status(400).send({status:400,msg:"Provide valid phone to update "})
      }
    }

    if(req.body.password==="" || req.body.password){
      if(!isValid(req.body.password) || !isValidPassword(req.body.password)){
        return res.status(400).send({status:400,msg:"Provide valid password to update "})
      }
    }


    const userfound=await userdb.findOne({_id:ObjectId(userid)})
    if(!userfound){
      return res.status(404).send({status:404,msg:"user not found"})
    }
     
     let updateduser=await userdb.updateOne({_id:ObjectId(userid)},{$set:reqbody})
     

    res.status(201).send({status:201,data:updateduser})
    }else{
        return res.status(400).send({status:400,msg:"invalid user id"})
    }

    }catch(err){
      console.log('Error in updateuser: ',err)
    }
}


// 4. delete user :id
const deleteUser=async(req,res)=>{
    try{
        if(ObjectId.isValid(req.params.id)){
            let userid=req.params.id
           
            let userdb=await dbconn()

            const userfound=await userdb.findOne({_id:ObjectId(userid)})
            if(!userfound){
              return res.status(404).send({status:404,msg:"user is already deleted.."})
            }
             

            let userdeleted=await userdb.deleteOne({_id:ObjectId(userid)})
       
           res.status(201).send({status:201,msg:"user deleted successfully!!"})
           }else{
               return res.status(400).send({status:400,msg:"invalid user id"})
           }

    }catch(err){
      console.log('Error in deleteuser: ',err)
    }
}


// 5. get all users
const getUsers = async(req,res)=>{
    try{
        // pagination logic 
        let page=req.query.page||1
        let docperpage=3
        let skip=docperpage*(page-1)
        let limit=docperpage
        
        let userdb=await dbconn()



        let match={}
        if(req.query.keyword){
           match.$or=[
            {username:new RegExp(req.query.keyword,"i")},
            {fullname:new RegExp(req.query.keyword,"i")},
            {email:new RegExp(req.query.keyword,"i")}
          ]
        }
        let sort={fullname:1,username:1}

        if(req.query.fullname){
          sort={
           fullname:parseInt(req.query.fullname)
          
          }
       }else if(req.query.username){
        sort={
          username:parseInt(req.query.username)
         
         }
       }
        
      
        let pipeline=[ 
          {$match:match},
      
          {
            $facet:{
              data:[{$skip:skip},{$limit:limit},{$sort:sort}], 
            }
          } ,
        ]

        let allusers=await userdb.aggregate(pipeline).toArray()

        res.status(200).send({status:200,data:allusers[0].data})
    

    }catch(err){
      console.log('Error in getUsers: ',err)
    }
}


//6. follow user route handler
const modifieUser=async (req,res)=>{
    try{

        if(req.body.userId!==req.params.id){
            const userdb=await dbconn()

            // 
            let currentuser=await userdb.findOne({_id:ObjectId(req.body.userId)})

            // params id i am following to him
            let user=await userdb.findOne({_id:ObjectId(req.params.id)})



            if(!user.followers.includes(req.body.userId)){
                //  pushing followers
              await userdb.updateOne({_id:ObjectId(req.params.id)},{$push:{followers:req.body.userId}})

              // pushing followinns
             const followed= await userdb.updateOne({_id:ObjectId(req.body.userId)},{$push:{followins:req.body.userId}},{upsert:true})

              res.status(201).send({status:201,data:followed})

            }else{
                return res.status(403).send({status:403,msg:"you already followers"})
            }



        }else{
            return res.status(400).send({status:400,msg:"you can nt follow own account"})
        }


    }catch(err){
      console.log('Error in modifie user: ',err)
    }
}


// 7. see all followers
const showFollowers=async(req,res)=>{
    try{

        if(ObjectId.isValid(req.params.id)){
            let userdb=await dbconn()
            let userfollowers=await userdb.findOne({_id:ObjectId(req.params.id)})

           
            if(!userfollowers){
              return res.status(404).send({status:404,msg:"user not found."})
            }
             
            let respo={
              username:userfollowers.username,
              fullname:userfollowers.fullname,
              followers:userfollowers.followers,
              followins:userfollowers.followins,
              gender:userfollowers.gender,
              phone:userfollowers.phone
            }

            
            res.status(200).send({status:200,data:respo})
        }else{
            return res.status(400).send({status:400,msg:"invalid user id"})
        }

    }catch(err){
      console.log('Error in showFollowers: ',err)
    }
}




// login api
const loginHandler=async(req,res)=>{
  try{
    let credentials=req.body

    let obj2=new Users(credentials)


    if(!obj2.isValidEmail()){
      return res.status(400).send({status:400,msg:'Enter valid email'})
    }

    if(!obj2.isValidPassword()){
      return res.status(400).send({status:400,msg:'Enter valid email'})
    }
    

  let userdb=await dbconn()
  let userdata=await userdb.findOne({email:credentials.email})

  const validPassword = await bcrypt.compare(credentials.password, userdata.password)

  if(!validPassword){
    return res.status(400).send({status:400,msg:"wrong password"})
  }
  
   let loginuser=await userdb.findOne({email:credentials.email,password:userdata.password})

  res.status(201).send({status:201,data:loginuser})


  }catch(error){
    console.log(`Error in login api.`)
  }

}

module.exports={getUser,getUsers,modifieUser,updateUser,deleteUser,addUser,showFollowers,loginHandler}
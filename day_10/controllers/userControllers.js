const dbconn = require('../db/conn.js') 
const {isValid}=require('../utils/validator.js')
const {ObjectId}=require('mongodb')
const bcrypt = require("bcrypt")

const mobileRegex = /^[6-9]\d{9}$/

const Users=require('../models/usersSchema.js')
// 1. add user api

const addUser=async (req,res)=>{
  try{
    // 
    const reqData=req.body

    // throw res.send({status:400,msg:"error using throw"})
    
    // this code for generic error
    let {username,fullname,email,phone,gender,password}=reqData
    // console.log(username)

    let errstr=""
    if(!isValid(username))  errstr=errstr+"Username " 
    if(!isValid(fullname))  errstr=errstr+"Fullname"
    // if(!isValid(email))  errstr=errstr+"emai"
    if(!isValid(phone))  errstr=errstr+"phone"
    if(!isValid(gender))  errstr=errstr+"gender"
    if(!isValid(password))  errstr=errstr+"password"
   

    if(!isValid(username) || !isValid(fullname) || !isValid(phone) || !isValid(gender)){
        return res.status(400).send({status:400,msg:`${errstr} is can not be empty and null`})
    }

    
    // class intiated 
    const obj1=new Users(reqData)



    if(!mobileRegex.test(phone)) {
        
        return res.status(400).send({status:400,msg:"Enter valid phone number"})
    }

    if(!obj1.isValidEmail()){
        return res.status(400).send({status:400,msg:'Enter valid email'})
    }

    if(!obj1.isValidPassword()){
        return res.status(400).send({status:400,msg:'Enter valid email'})
    }

    // password hashed
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(obj1.password, salt)
    obj1.password=hashedPassword


    let user=await dbconn()
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

        // {_id:ObjectId(userid)})
        let userfound=await userdb.findOne({_id:ObjectId(userid)})
        // console.log(userfound)

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
     let userid=req.params.id
    

    let reqbody=req.body
  
     let userdb=await dbconn()
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
           //  console.log(ObjectId(userid))
       
       
            let userdb=await dbconn()

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
        // users
        

        // pagination logic 
        let page=req.query.page||1
        let docperpage=3
        let skip=docperpage*(page-1)
        let limit=docperpage
        
        let userdb=await dbconn()

        // if()


        let match={}

        if(req.query.keyword){
           match.$or=[
            {username:new RegExp(req.query.keyword,"i")},
            {fullname:new RegExp(req.query.keyword,"i")},
            {email:new RegExp(req.query.keyword,"i")}
          ]
        }
        console.log(match)


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

        console.log(sort)
        
       
        let pipeline=[
          
          
          {$match:match},
      
          {
            $facet:{
              data:[{$skip:skip},{$limit:limit},{$sort:sort}],
              
            }
          } ,
          
         
        ]

        let allusers=await userdb.aggregate(pipeline).toArray()


        // // pagination
        // if(req.query.page){
        // let page=req.query.page||0
        // let perpage=3
        // const paginationdata=await userdb.find().skip(perpage*page).limit(perpage).toArray()
        // return res.status(200).send({status:200,data:paginationdata})

        
        // }else {
        //     // sort by fullname
        //  if(req.query.fullname){
        //     let fullname_sort=req.query.fullname
        //     const fullnamesorteduser=await userdb.find().sort({fullname:fullname_sort}).toArray()
        //    return res.status(200).send({status:200,data:fullnamesorteduser})

        //    // sort by username
        //  }else if(req.query.username){
        //     let username_sort=req.query.username
        //     const usernamesortuser=await userdb.find().sort({username:username_sort}).toArray()
        //    return res.status(200).send({status:200,data:usernamesortuser})
        //  }
        // }
        
        // let filterobj={}
        // let queryData=req.query
        // let fname=queryData.fname
        // let lname= queryData.lname
        // let email=queryData.email


        // if(fname){
        //   filterobj.fullname={}
        //   fname=fname.trim()
        //   filterobj.fullname.$regex=fname
        //   filterobj.fullname.$options="i"
        //   const searchfname=await userdb.find(filterobj).toArray()
        //   return res.status(200).send({status:200,data:searchfname})
        // }

        // if(lname){
        //   filterobj.username={}
        //   lname=lname.trim()
        //   filterobj.username.$regex=lname
        //   filterobj.username.$options="i"
        //   const searchlname=await userdb.find(filterobj).toArray()
        //   return res.status(200).send({status:200,data:searchlname})
        // }

        // if(email){
            
        //     filterobj.email={}
        //     email=email.trim()
        //     filterobj.email.$regex=email
        //     filterobj.email.$options="i"
        //     const searchemail=await userdb.find(filterobj).toArray()
        //     return res.status(200).send({status:200,data:searchemail})
        // }
        
        // const allusers=await userdb.find(filterobj).toArray()


        

    
        res.status(200).send({status:200,data:allusers})

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
              await userdb.updateOne({_id:ObjectId(req.body.userId)},{$push:{followins:req.body.userId}})
              res.status(201).send({status:201,data:currentuser})

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
            
            res.status(200).send({status:200,followers:userfollowers.followers})
        }else{
            return res.status(400).send({status:400,msg:"invalid user id"})
        }

    }catch(err){
      console.log('Error in showFollowers: ',err)
    }
}

// 8. restaurant for learning aggregation pipe line
// const aggregation_pipeline=async ()=>{
  
// }



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
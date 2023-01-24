const errorHandleMiddle=async(error,req,res,next)=>{
     if(error){
        res.status(500).send({error:{message:"error handler middleware."}})
     }
     console.log("error handler middlware")
    next()
}

module.exports=errorHandleMiddle
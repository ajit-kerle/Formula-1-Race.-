const {configure,getLogger}=require('log4js')



configure({
    appenders:{
        app:{type:"file",filename:"app.log"},
        out:{type:"stdout"}
        // multi: {
        //     type: 'multiFile', base: 'logs/', property: 'categoryName', extension: '.log',
        //     maxLogSize: 1024, backup: 3, compress: true
        // }
        
    },
    categories:{
        default:{
            appenders:["app","out"],
            level:"info"
        }
    }
})



const auth=async(req,res,next)=>{
    const logger=getLogger()
    let details={
        method:req.method,
        path:req.path
    }
    logger.info(details)
    logger.debug("This is debugger attached")
    // logger.error("Error in middleware function")
    logger.warn("warning here in middleware")
    next()
}

module.exports=auth


const dbconn = require('../db/conn.js') 
const bcrypt = require("bcrypt")

module.exports = class Users{
   
    constructor(userObj){
        this.username=userObj.username
        this.fullname=userObj.fullname
        this.email=userObj.email,
        this.phone=userObj.phone
        this.gender=userObj.gender,
        this.password=userObj.password,
        this.followers=[]
        this.followins=[]
    }
    
    isValidEmail(){
        let emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        return emailRegex.test(this.email)
    }

    isValidPassword(){
        let passwordRegex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/
        return passwordRegex.test(this.password)
    }

    isValidBody(){
        return Object.keys(userObj).length >0
    }

    // async hashPassword(){
        
    //     this.password=hashedPassword
    // }

}
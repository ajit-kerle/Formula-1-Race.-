const express=require('express')

const router=express.Router()


//1. API to add users (signup)
router.post('/adduser',addUser)

//2. API to get user (signup)
router.get('/getuser/:id',getUser)

//3.API to add users (signup)
router.patch('/updateuser/:id',updateUser)

//4. API to add users (signup)
router.delete('/deleteuser/:id',deleteUser)

//5. API to get all users
router.get('/getusers',getUsers)

//6. API to follow a user
router.patch('/follow',modifieUser)

//7. API to follow a user
router.get('/allfollowers',showFollowers)

module.exports=router


const chai=require('chai')
const assert=chai.assert
const expect=chai.expect
const should=chai.should()
const Users=require("../models/usersSchema.js")




const chaiHttp=require('chai-http')

chai.use(chaiHttp)

var server=require('../index.js')
const { response } = require('express')

describe("Get Api Request Tests", (done)=>{

    // get all users list 
    it("Should be able to get all user list",(done)=>{
        chai.request(server)
        .get('/getusers')
        .end((err,response)=>{

            // status checking
            expect(response.status).to.be.equal(200)

            // datatype checkings
            expect(response.body).to.be.have.all.keys('data','status')
            response.body.data.should.be.a('array')
            response.body.data[0].should.be.a("object")

            // checking props 
            response.body.data[0].should.have.property("username")
            response.body.data[0].should.have.property("fullname")
            response.body.data[0].should.have.property("phone")
            response.body.data[0].should.have.property("gender")
            response.body.data[0].should.have.property("password")
            response.body.data[0].should.have.property("email")
            response.body.data[0].should.have.property("followers")
            response.body.data[0].should.have.property("followins")
            response.body.data[0].should.have.property("_id")
            done()
        })
    })
    
    it("Should not be able to get all user list",(done)=>{
        chai.request(server)
        .get('/allusers')
        .end((err,response)=>{

            expect(response.status).to.be.equal(404)
            response.body.should.have.property("msg").equal('Page not available')
            done()
        })
    })


    // ================= get single user =============
    it("should be able to get single user /getuser/:id",(done)=>{
        let userId='63d37cb067524f2c53317d58' 
        chai.request(server)
        .get('/getuser/'+userId)
        .end((err,response)=>{  
          // status code checks  
          expect(response.status).to.be.equal(200)
          expect(response.body.status).to.be.equal(200)

          // checks data types
          response.body.data.should.be.a("object")

          // checks props
          response.body.data.should.have.property("username")
          response.body.data.should.have.property("fullname")
          response.body.data.should.have.property("phone")
          response.body.data.should.have.property("gender")
          response.body.data.should.have.property("password")
          response.body.data.should.have.property("email")
          response.body.data.should.have.property("followers")
          response.body.data.should.have.property("followins")

          // checks user id 
          response.body.data.should.have.property("_id").equal("63d37cb067524f2c53317d58")
        done()
        })
    })



})


describe("Post API Requests Tests ",()=>{

    // post user  positive
    it('post user: positve suit /adduser',(done)=>{

        const user=new Users({
            "username":"sam",
            "fullname":"karan",
            "email":"rcbteam12@gmail.com",
            "phone":"8123648158",
            "gender":"male",
            "password":"Password@123"
        })

        chai.request(server)
        .post('/adduser')
        .send(user)
        .end((err,response)=>{

            // check status
            response.should.have.status(201)
            expect(response.body.status).to.be.equal(201)

            //  data types
            response.body.should.be.a("object")

            // checking inserted or not
            expect(response.body.data.acknowledged).to.be.equal(true)
            

          // checks props
        done()   

        })
  
      })


    // negatives
    it('should not post user without validating /adduser',(done)=>{

        const user=new Users({
            "username":"subhash",
            "fullname":"motarge",
            "email":"rcbteam12gmail.com",
            "phone":"8123648158",
            "gender":"male",
            "password":"Password@123"
        })

        chai.request(server)
        .post('/adduser')
        .send(user)
        .end((err,response)=>{
            // check status
            response.should.have.status(400)
            expect(response.body.status).to.be.equal(400)

            //  data types
            response.body.should.be.a("object")

            // checking inserted or not
            // expect(response.body.msg).to.be.equal("Username  is can not be empty and null")
            // expect(response.body.msg).to.be.equal("Fullname is can not be empty and null")
            // expect(response.body.msg).to.be.equal("email  is can not be empty and null")
            // expect(response.body.msg).to.be.equal("phone  is can not be empty and null")
            // expect(response.body.msg).to.be.equal("gender  is can not be empty and null")
            // expect(response.body.msg).to.be.equal("password  is can not be empty and null")



            // checking indian number
            // expect(response.body.msg).to.be.equal("Enter valid indian phone number")
            // expect(response.body.msg).to.be.equal('Enter valid email')
            // expect(response.body.msg).to.be.equal('Enter valid password')
                    
          // checks props
        done()   

        })
  
      })
})


// update user test cases

describe("Patch API Request /updateuser",()=>{
    it("Should be able to update user",(done)=>{
        let user={
            
            "email":"baby2@gmail.com"
            
        }

        let userId="63ce67f3c27534dfa99d5399"

        chai.request(server)
        .patch("/updateuser/"+userId)
        .send(user)
        .end((err,response)=>{

            console.log(response.body.data.modifiedCount)

            // check status
            response.should.have.status(201)
            expect(response.body.status).to.be.equal(201)

            //  data types
            response.body.data.should.be.a("object")

            // checking inserted or not
            expect(response.body.data.acknowledged).to.be.equal(true)
            expect(response.body.data.modifiedCount).to.be.equal(0)
        done()

        })
    })

    


    // negative test suite for path request
    it("Should not able to update user",(done)=>{
        let user={
            
        }

        let userId="63ce67f3c27534dfa99d5399"

        chai.request(server)
        .patch("/updateuser/"+userId)
        .send(user)
        .end((err,response)=>{
            
            // check status
            response.should.have.status(400)
            expect(response.body.status).to.be.equal(400)

            //  data types
            response.body.should.be.a("object")

            // checking inserted or not
            expect(response.body.msg).to.be.equal("Provide something to update")
        done()    
        })
    })
})



// delete user


describe("DELETE API Request /deleteuser",()=>{
    it("Should be able to update user",(done)=>{
      

        let userId="63ce67f3c27534dfa99d5399"

        chai.request(server)
        .delete("/deleteuser/"+userId)
        .end((err,response)=>{


            // check status
            response.should.have.status(201)
            expect(response.body.status).to.be.equal(201)

            //  data types
            response.body.should.be.a("object")

            // checking inserted or not
            expect(response.body.msg).to.be.equal("user deleted successfully!!")


            
        done()

        })
    })

    


    // // negative test suite for path request
    it("Should not able to delete user",(done)=>{
        let user={
            
        }

        let userId="63ce67f3c27534dfa99d5399"

        chai.request(server)
        .patch("/deleteuser/"+userId)
        .send(user)
        .end((err,response)=>{
            
            // check status
            response.should.have.status(404)
            expect(response.body.status).to.be.equal(404)

            //  data types
            response.body.should.be.a("object")

            // checking inserted or not
            expect(response.body.msg).to.be.equal("user is already deleted..")
        done()    
        })
    })
})



// {
//     "status": 200,
//     "data": {
//         "_id": "63d3a7d5a9aa89cfd6349c50",
//         "username": "amk",
//         "fullname": "ajitkerle",
//         "email": "ajit12@gmail.com",
//         "phone": "9823648158",
//         "gender": "male",
//         "password": "$2b$10$6/SPd4Qq2hqi7IX3SqDX5uUTys8fXDVVuCkteArhLHKn23nKaeHse",
//         "followers": [],
//         "followins": []
//     }
// }


// {
//     "status": 200,
//     "data": {
//         "_id": "63d3a88f6a1ff09b57da9473",
//         "username": "pmk",
//         "fullname": "pratapkerle",
//         "email": "pratap12@gmail.com",
//         "phone": "9823648158",
//         "gender": "male",
//         "password": "$2b$10$8vPTOurLsJUou2ih2oDJ3uidAOwd5Kp6bD7meHnMD4WnvwME8blOm",
//         "followers": [],
//         "followins": []
//     }
// }



/// follow user 

describe("follow user API Request user/:id/follow",()=>{
    it("Should be able to follow",(done)=>{
      
        // follow this
        let userId="63d3a88f6a1ff09b57da9473"

        let body={
            "userId":"63d3a7d5a9aa89cfd6349c50"
        }

        chai.request(server)
        .put("/user/"+userId+"/follow")
        .send(body)
        .end((err,response)=>{


            // check status
            response.should.have.status(403) // already followers
            // response.should.have.status(201) // new followers
            // expect(response.body.status).to.be.equal(201)
            expect(response.body.status).to.be.equal(403) // already followers


            //  data types
            response.body.should.be.a("object")

            // checking inserted or not
            // expect(response.body.data.modifiedCount).to.be.equal(1)
            console.log("followed successfully")
            
        done()

        })
    })

    


    // // negative test suite for path request
    it("Should not able to follow",(done)=>{
        let body={
            "userId":"63ce67f3c27534dfa99d5399"
        }

        let userId="63ce67f3c27534dfa99d5399"

        chai.request(server)
        .put("/user/"+userId+"/follow")
        .send(body)
        .end((err,response)=>{
            
            // check status
            response.should.have.status(400)
            expect(response.body.status).to.be.equal(400)

            //  data types
            response.body.should.be.a("object")

            // checking inserted or not
            expect(response.body.msg).to.be.equal("you can nt follow own account")
        done()    
        })
    })
})


// show all followers

describe("SHOW FOLLOWERS API REQUEST : GET user/:ID/followers",()=>{
    it("should able to see followers",(done)=>{
        let userid="63d3a88f6a1ff09b57da9473"
       chai.request(server)
       .get("/user/"+userid+"/followers")
       .end((err,response)=>{
      
        // status code
        expect(response.status).to.be.equal(200)
        expect(response.body.status).to.be.equal(200)

        response.body.data.should.have.property("username")
        response.body.data.should.have.property("fullname")
        response.body.data.should.have.property("followers")
        response.body.data.should.have.property("gender")
        response.body.data.should.have.property("followins")
        response.body.data.should.have.property("phone")
        
        done()
       })
    })

    // negative test suite
    it("should not able to see followers",(done)=>{
        let userid="63d3a88f6a1ff09b57da9473h" // wrong objid
       chai.request(server)
       .get("/user/"+userid+"/followers")
       .end((err,response)=>{
          
        expect(response.status).to.be.equal(400)

        expect(response.body.status).to.be.equal(400)

        response.body.should.have.property("msg").equal("invalid user id")
        done()
       })
    })


})

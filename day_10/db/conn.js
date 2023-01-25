const { MongoClient } = require('mongodb')
const dotenv=require('dotenv')


dotenv.config()
const dbName = process.env.DATABASE
// process.pid
const url = process.env.URL
const client = new MongoClient(url)


async function dbconn(){
    await client.connect()
    const db = client.db(dbName)

    // console.log(db)
    const users=db.collection('users')
    // cons
    // console.log(users)
    return users
}

   


module.exports=dbconn
const { MongoClient } = require('mongodb')

const dbName = 'dummydb'

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)


async function dbconn(){
    await client.connect()
    const db = client.db(dbName)

    // console.log(db)
    // const users=db.collection('users')
    // cons
    // console.log(users)
    return db
}


// dbconn().then(console.log)
// .catch(console.error)
// .finally(()=>client.close())


// dbconn()

// 

module.exports=dbconn
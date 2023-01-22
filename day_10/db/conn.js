const { MongoClient } = require('mongodb')

const dbName = 'dummydb'

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)


async function main(){
    await client.connect()
    const db = client.db(dbName)
    console.log(db)
    return 'done'
}


main().then(console.log)
.catch(console.error)
.finally(()=>client.close())


// module.exports=main
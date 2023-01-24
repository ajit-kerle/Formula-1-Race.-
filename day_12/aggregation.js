const { MongoClient } = require('mongodb')


const dbName = 'persons'

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)





async function dbconn(){
    await client.connect()
    const db = client.db(dbName)
    let persons=db.collection("persons")
    return persons
}


const example1=async()=>{
    const persondb=await dbconn()

    // const result=await  persondb.insertMany(data)

    // console.log(result)

    // isActive:false
    // let data=await persondb.aggregate([
    //     {$match:{isActive:false}},
    // ]).toArray()

    // last three docs
    // let data1=await persondb.aggregate([
    //     // {$match:{index:{$gte:995}}},
    //     // {$match:{index:{$lte:50,$gte:45}}}
    //     {$match:{$and:[{gender:"male"},{age:{$lte:25}}]}}

    // ]).toArray()

    // let findata=await persondb.find({index:{$gte:980},tags:{$size:4}}).toArray()


    // let data2=await persondb.aggregate(
    //     [
    //         {$match:{index:{$gte:990}}},
    //         // {$group:{_id:"$age"}}
    //         {$group:{_id:{age:"$age",gender:"$gender"}}}
    //     ]

    // ).toArray()

    // let data2=await persondb.aggregate(
    //     [
    //         {$match:{index:{$gte:990}}},
    //         // {$group:{_id:"$age"}}
    //         // {$group:{_id:"$company.title"}}
    //         {$group:{_id:{eyeColor:"$eyeColor",favoriteFruit:"$favoriteFruit"}}}
    //     ]

    // ).toArray()


    // let data2=await persondb.aggregate([
    //     {$match:{index:{$gte:980},gender:"female"}},
    //     {$group:{_id:{eyeColor:"$eyeColor",age:"$age",gender:"$gender"}}}

    // ]).toArray()


    // let data2=await persondb.aggregate([
    //     {$group:{_id:{eyeColor:"$eyeColor",age:"$age",gender:"$gender"}}},
    //     {$match:{"_id.eyeColor":"blue"}}


    // ]).toArray()


    // $count return count [ { allDocumentsCount: 1000 } ]
     // time taken 0.21 milisecond  server side method
    // let data2=await persondb.aggregate([
    //     {$count:"allDocumentsCount"}
    // ]).toArray()
    


    // let data2=await persondb.aggregate([
    //     {$match:{index:{$gte:980}}},
    //     {$group:{_id:"$age"}},
    //     {$count:"age"}
    // ]).toArray()


    // sort methods
    // let data2=await persondb.aggregate([
        // {$sort:{name:1}}
        // {$sort:{index:-1}}
    //     {$sort:{age:-1}}
    // ]).toArray() 


    // sort with match group
    // let data2=await persondb.aggregate([
    //     {$group:{_id:"$favoriteFruit"}},
    //     {$sort:{_id:1}}
    // ]).toArray()

    // let data2=await persondb.aggregate([
    //     {$group:{_id:"$age"}},
    //     {$sort:{_id:1}}
    // ]).toArray()


    // let data2=await persondb.aggregate([
    //     {$group:{_id:{eyeColor:"$eyeColor",favoriteFruit:"$favoriteFruit"}}},
    //     {$sort:{"id.eyeColor":1,"_id.favoriteFruit":-1}}
    // ]).toArray()


    // let data2=await persondb.aggregate([
    //       {$match:{index:{$gte:990}}},
    //       {$project:{_id:0,name:1,"company.title":1}}
    //     //   {$count:"name"}
    //     ]).toArray()


    // accumaltor syntac
    // sum max avg
    // let data2=await persondb.aggregate([
    //         //   {$group:{_id:"$age",
    //         // count:{$sum:1}}}
    //          {$sort:{index:1,name:1}}

    //         // {$group:{_id:"$favoriteFruit",count:{$sum:1}}}
    //         ]).toArray()
    

    console.log(data2)

}

example1()


// {
//     "index": NumberInt(0),
//     "name": "Aurelia Gonzales",
//     "isActive": false,
//     "registered": ISODate("2015-02-11T04:22:39+0000"),
//     "age": NumberInt(20),
//     "gender": "female",
//     "eyeColor": "green",
//     "favoriteFruit": "banana",
//     "company": {
//       "title": "YURTURE",
//       "email": "aureliagonzales@yurture.com",
//       "phone": "+1 (940) 501-3963",
//       "location": {
//         "country": "USA",
//         "address": "694 Hewes Street"
//       }
//     },
//     "tags": [
//       "enim",
//       "id",
//       "velit",
//       "ad",
//       "consequat"
//     ]
//   },
//   {
//     "index": NumberInt(1),
//     "name": "Kitty Snow",
//     "isActive": false,
//     "registered": ISODate("2018-01-23T04:46:15+0000"),
//     "age": NumberInt(38),
//     "gender": "female",
//     "eyeColor": "blue",
//     "favoriteFruit": "apple",
//     "company": {
//       "title": "DIGITALUS",
//       "email": "kittysnow@digitalus.com",
//       "phone": "+1 (949) 568-3470",
//       "location": {
//         "country": "Italy",
//         "address": "154 Arlington Avenue"
//       }
//     },
//     "tags": [
//       "ut",
//       "voluptate",
//       "consequat",
//       "consequat"
//     ]
//   },
//   {
//     "index": NumberInt(2),
//     "name": "Hays Wise",
//     "isActive": false,
//     "registered": ISODate("2015-02-23T10:22:15+0000"),
//     "age": NumberInt(24),
//     "gender": "male",
//     "eyeColor": "green",
//     "favoriteFruit": "strawberry",
//     "company": {
//       "title": "EXIAND",
//       "email": "hayswise@exiand.com",
//       "phone": "+1 (801) 583-3393",
//       "location": {
//         "country": "France",
//         "address": "795 Borinquen Pl"
//       }
//     },
//     "tags": [
//       "amet",
//       "ad",
//       "elit",
//       "ipsum"
//     ]
//   },


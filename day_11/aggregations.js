const { MongoClient } = require("mongodb");



const dbName = 'restodb'

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)


async function main(){
    await client.connect()
    const db = client.db(dbName)

    let resodb=db.collection("restaurants")

    
    return resodb
}


const docs = [
    { stars: 3, categories: ["Bakery", "Sandwiches"], name: "Rising Sun Bakery" },
    { stars: 4, categories: ["Bakery", "Cafe", "Bar"], name: "Cafe au Late" },
    { stars: 5, categories: ["Coffee", "Bakery"], name: "Liz's Coffee Bar" },
    { stars: 3, categories: ["Steak", "Seafood"], name: "Oak Steakhouse" },
    { stars: 4, categories: ["Bakery", "Dessert"], name: "Petit Cookie" },
];

const aggregation_pipe=async()=>{
    let restodb=await main()
    // let result=await restodb.insertMany(docs)

    // console.log(result)

    // const pipeline = [
    //     { $match: { categories: "Bakery" } },
    //     { $group: { _id: "$stars", count: { $sum: 1 } } }
    // ];

    const aggCursor= await restodb.aggregate([
        {$match:{categories:"Seafood"}},

        // {$group:{_id:"stars",count:{$sum:1}}}

    ]).toArray()
    
    console.log(aggCursor)
    for (const doc of aggCursor){
        console.log(doc)
    }
}


aggregation_pipe()





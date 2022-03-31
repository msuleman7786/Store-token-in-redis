                    // doc :- https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/

const {MongoClient} = require("mongodb")
const url = "mongodb://localhost:27017";
const database="e-comm"

const client= new MongoClient(url);

async function dbconnect() {
    let result = await client.connect();
    let db = result.db(database)
    return db.collection("product")

}

async function usersDbConenct() {
    let user = await client.connect()
    let usersDb = user.db(database)
    return usersDb.collection('usersDb')
}

module.exports = {dbconnect, usersDbConenct};
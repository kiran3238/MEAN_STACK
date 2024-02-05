const { MongoClient } = require("mongodb");
 
const URL = "mongodb://127.0.0.1:27017/KiranShende";
const client = new MongoClient(URL);

async function getConnection() {
  let result = await client.connect();
  let db = result.db("KiranShende");
  let collection = db.collection("Friends");
  return collection; // Return the collection
}

async function readData() {
  let data = await getConnection();
  data = await data.find({}).toArray();
  console.log("Data from marvellous database is :");
  console.log(data);
}

async function deleteData() {
  let data = await getConnection();
  let result = await data.deleteOne({ "batch": "ppa" });

  if (result.acknowledged) {
    console.log("data is deleted");
  }
}

async function insertData() {
  let data = await getConnection();
  let result = await data.insertOne({ "batch": "windows", "Fees": 19700 }); // Corrected typo: insertOne

  if (result.acknowledged) {
    console.log("data is inserted");
  }
}

async function updateData() {
  let data = await getConnection();
  let result = await data.updateOne(
    { "batch": "ppa" },
    { $set: { "Fees": 21000 } }
  );

  if (result.acknowledged) {
    console.log("data is updated");
  }
}

async function main() {
  // insertData();
  readData();
}

// Starter of the applications
main();

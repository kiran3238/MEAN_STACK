const {MongoClient} = require("mongodb");
const URL = "mongodb://localhost:27017/KiranShende";

const client = new MongoClient(URL);

//////////////////////////////////////////////////////
//  GetConnection
//  It is used to connect node + express serever to mongodb
//////////////////////////////////////////////////////
async function GetConnection()
{
    let result = await client.connect();
    let db = result.db("KiranShende");
    return db.collection("Friends");
}
//////////////////////////////////////////////////////
//  ReadData
//  It is used to read the data
//////////////////////////////////////////////////////
async function ReadData()
{
    let data = await GetConnection();
    data = await data.find().toArray();
    console.log("Data from tha Marevllous Database is : ");
    console.log(data);
}
async function UpdateData(){
    let data=await GetConnection();
    let result=await data.updateOne({"Name":"python"},{$set:{"Fees":"22000"}});

    if(result.acknowledged){
        console.log("Updated");
    }
}
///////////////////////////////
/////////////////////DeleteData
//It is used to delete data


async function DeleteData(){
    let data=await GetConnection();
    let result=await data.deleteOne({"Name" : "PPA"});
    if(result.acknowledged)
    {
        console.log("Data gets deleted Succesfully");
    }

}
//////////////
//UpdateData
//////////////

///////////////
///InsertData
//It is used to insert data
/////////////////
async function InsertData(){
    let data=await GetConnection();
    let result=await data.insertOne({"Name":"LSP","Fees":"20500","Duration":"5 Months"});

    if (result.acknowledged)
    {
        console.log("Data gets sucessfully inserted");
    }
}
//////////////////////////////////////////////////////
//  main
//  Entry point function
//////////////////////////////////////////////////////
function main()
{
    let ret;
    ret = GetConnection();
    
    console.log("Database connected.......");
    ReadData();
   // DeleteData();
    //InsertData();
    //UpdateData();
}
main()


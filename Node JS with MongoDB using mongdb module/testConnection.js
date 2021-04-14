// load the mongodb module as well as creating the reference of mongodb using MongoClient
let mongoClient = require("mongodb").MongoClient
/*
let mongodb = require("mongodb")    // load the module 
let mongoClient = mongodb.MongoClient;  // created the reference. 
*/
let url = "mongodb://localhost:27017"
mongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=>{
   // let db = client.db("meanstack");    // connected database
    if(!err){
        console.log("connected successfully")
    }else {
        console.log("Error "+err);
    }
    client.close();
})
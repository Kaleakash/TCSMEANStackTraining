let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"
mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
if(!err1){
            let db = client.db("meanstack");
    db.collection("Product").insertOne({_id:102,pname:"Laptop",price:95000},(err2,result)=>{
            if(!err2){
                console.log(result.insertedCount);
            }else {
                console.log(err2.message);
            }
            client.close();    
        });
        
    }
});
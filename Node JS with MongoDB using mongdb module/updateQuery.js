let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=> {
    if(!err1){
        let db = client.db("meanstack");
        db.collection("Product").updateOne({_id:100},{$set:{price:60000}},(err2,result)=> {
            if(!err2){
                   // console.log(result);
                   if(result.modifiedCount>0){
                        console.log("Record updated successfully")
                   }else {
                        console.log("Record didn't update");
                   }
            }
            client.close();
        })           
    }
})
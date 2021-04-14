let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=> {
    if(!err1){
        let db = client.db("meanstack");
       // let cursor = db.collection("Product").find();
       let cursor = db.collection("Product").find({"price":{$gt:60000}}); 
        //console.log(cursor);
            cursor.each((err2,doc)=> {
                    if(doc!=null){
                //console.log(doc);
                console.log("id is "+doc._id+"Product Name is "+doc.pname+" Price is "+doc.price);
                    }
                    client.close();
            })
       
    }
})
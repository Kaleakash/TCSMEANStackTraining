let obj = require("mongoose");  //load the module 
obj.Promise= global.Promise;       // creating the reference. 
let url = "mongodb://localhost:27017/meanstack";
const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
obj.connect(url,mongooseDbOption);   //ready to connect 
let db = obj.connection;    // connected to database. 
db.on("error",(err)=>console.log(err));
db.once("open",()=>{

    //Defined the Schema 
    let ProductSchema = obj.Schema({
        _id:Number,
        pname:String,
        price:Number
    });
    // Creating Model using schema 
    let Product = obj.model("",ProductSchema,"Product");

    // Creating reference using model 
    Product.deleteOne({_id:101},(err,result)=> {
        if(!err){
            //console.log(result);
            if(result.deletedCount>0){
                    console.log("Record deleted ");
            }else {
                    console.log("Record not present");
            }
        }
        obj.disconnect();
    })

})


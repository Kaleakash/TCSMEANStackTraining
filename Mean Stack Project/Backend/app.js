//Load all required modules 
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");


//Database URL Details 
let url = "mongodb://localhost:27017/meanstack";

//middleware enable data from post method.
app.use(bodyParser.urlencoded({extended:true}));    // enable body part data  
app.use(bodyParser.json());                         // json data. 

//Database connection without warning 
const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,mongooseDbOption);   //ready to connect 

//Connect the data 
mongoose.connection

//link to router module 
var Product = require("./router/product.router.js");

//URL 
//http://localhost:9090/product/allProductDetails

//Middleware 
app.use("/product",Product)

app.listen(9090,()=>console.log("Server running on port number 9090"));


//Load all required modules 
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

//Unable to load the static files 
app.use(express.static(process.cwd()));

//Database URL Details 
let url = "mongodb://localhost:27017/meanstack";

//load the frontend file ie angular program 

app.get('/', (req,res) => {
 res.sendFile(__dirname+"/index.html")
});


//middleware enable data from post method.
app.use(bodyParser.urlencoded({extended:true}));    // enable body part data  
app.use(bodyParser.json());                         // json data. 
app.use(cors());           // enable cors policy 

//Database connection without warning 
const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,mongooseDbOption);   //ready to connect 

//Connect the data 
mongoose.connection

//link to router module like a import concept. 
var Product = require("./router/product.router.js");

//URL 


//Middleware 

// http://localhost:9090/product/allProductDetails   Get App Product Details 
// http://localhost:9090/product/retrieveProductById/102   Get App Product Details by Id  
// http://localhost:9090/product/storeProductDetails    rest client or post man {"pid":103,"pname":"Computer","price":43000}
// http://localhost:9090/product/deleteProductById/101
// http://localhost:9090/product/updateProductPrice  update price using pid {"pid":103,"price":48000}

app.use("/product",Product)
//app.use("/order",Order)
//app.use("/customer",Customer)



app.listen(9090,()=>console.log("Server running on port number 9090"));


//Load required modules 
let app = require("express")();
let bodyParser = require("body-parser");
let port = 9090;

//middleware modules 
app.use(bodyParser.urlencoded({extended:true}));    // enable body data
app.use(bodyParser.json());     // enable json data. 

//Static customer array data 
let customers = [
    {"custId":100,"cname":"Ravi","age":21},
    {"custId":101,"cname":"Rajesh","age":24}
];

//Get methods 
//  http://localhost:9090/allCustomers
app.get("/allCustomers",(req,res)=> {
        res.json(customers);
});


//start server 
app.listen(port,()=>console.log(`Server running on port number ${port}`));

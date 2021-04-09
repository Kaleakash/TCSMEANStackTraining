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

//Post Methods 
// http://localhost:9090/storeCustomer
app.post("/storeCustomer",(req,res)=> {
        //console.log(req.body)
        customers.push(req.body);   // add the data in array 
        res.send("Customer records added successfully...");
})

// put Method : to update the records 
app.put("/updateAge",(req,res)=> {
    let cid = req.body.custId;
    let cage = req.body.age;
    let flag = 0;
    customers.find(c=>{
        if(c.custId==cid){
            c.age = cage;
            flag++;
         }
    }); 
        if(flag==0){
            res.send("CustId is invalid")    
        }else {
            res.send("Customer Age updated successfully...")
        }
    
})

//start server 
app.listen(port,()=>console.log(`Server running on port number ${port}`));

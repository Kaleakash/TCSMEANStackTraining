//Load required modules 
let app = require("express")();
let bodyParser = require("body-parser");
let port = 9090;

//middleware modules 
app.use(bodyParser.urlencoded({extended:true}));    // enable body data
app.use(bodyParser.json());     // enable json data. 

//Static customer array data 
let customers = [
    {custId:100,"cname":"Ravi","age":21},
    {custId:101,"cname":"Rajesh","age":24}
];

//Get methods 
//  http://localhost:9090/allCustomers
app.get("/allCustomers",(req,res)=> {
        res.json(customers);
});

//Post Methods 
// http://localhost:9090/storeCustomer
// Data format {"custId":100,"cname":"Ravi","age":21}   Method Post 
app.post("/storeCustomer",(req,res)=> {
        //console.log(req.body)
        customers.push(req.body);   // add the data in array 
        res.send("Customer records added successfully...");
})

// put Method : to update the records 
// http://localhost:9090/updateAge
// Data format {"custId":100,"age":21}  Method Put 
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

// http://localhost:9090/deleteCustomer/100
// Passing value using path param concept. 
app.delete("/deleteCustomer/:cid",(req,res)=> {
    let id = req.params.cid;
    let flag = 0;
    let j = 0;
    customers.find((c,i)=> {
        let ccId = c.custId;
        if( ccId== id){
            j=i;
            flag++; 
        }
    })
    
    if(flag==0){
            res.send("CustId is invalid")
    }else {
             customers.splice(j,1);  // 1st parameter index, number records.
            res.send("Customer record deleted successfully....")
    }
})

//start server 
app.listen(port,()=>console.log(`Server running on port number ${port}`));

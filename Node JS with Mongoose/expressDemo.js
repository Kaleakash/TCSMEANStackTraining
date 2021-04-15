let app = require("express")();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
/*
index.html                  get 
retreive all course         get
create, delete and update   post 

*/
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.post("/storeCDetails",(req,res)=> {
        /*
        retreive data from body part 
        connected to database 
        store in database. 
            res.sendFile(__dirname+"/index.html")
        */
})
app.post("/deleteCDetails/:cid",(req,res)=> {
    /*
    retreive data from body part 
    connected to database 
    store in database. 
        res.sendFile(__dirname+"/index.html")
    */
})

app.get("/get",(req,res)=> {
            /*
                retrieve records from mongodb and store in array 
                
                res.json(arrayName);

            */
})
app.listen(9090,()=>console.log("running.."));
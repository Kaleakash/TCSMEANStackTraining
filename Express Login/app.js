/*1st way 
let express = require("express")
let app = express();
*/
//2nd way 
let app = require("express")();
let bodyParser = require("body-parser");
// enable body part data
app.use(bodyParser.urlencoded({extended:true}));    
//app.use(bodyParser.json())  // enable json data. 
let port=9090;
app.get("/",(req,res)=>{
    //console.log(__dirname)
    //console.log(__dirname+"/login.html")
    res.sendFile(__dirname+"/login.html");
})
app.post("/checkLogin",(req,res)=>{
        let user = req.body.user;
        let pass = req.body.pass;
        if(user=="Raj" && pass=="Kumar"){
                res.send("Successfully Login")
        }   else {
                res.send("Failure try once again")
        }    
})
app.listen(port,()=>console.log(`Server running on port number ${port}`))

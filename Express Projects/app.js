let express = require("express");   // load the module 
let app = express();        // creating the reference of express module
let port =9090;

//Get methods. 
//http://localhost:9090
app.get("/",(req,res)=> {
        res.send("Welcome to Express module");
})
//http://localhost:9090/aboutus
app.get("/aboutus",(req,res)=> {
    res.send("Welcome to About Us Page")
})
//http://localhost:9090/contactus
app.get("/contactus",(req,res)=> {
    res.send("Welcome to Contact Us Page")
})
//http://localhost:9090/login
app.get("/login",(req,res)=> {
    res.send("Welcome to Login Page")
})
//passing single valule using query param 
//  http://localhost:9090/singleQuery?name=Ajay
app.get("/singleQuery",(req,res)=> {
    let name = req.query.name;      // http module 
    res.send("Welcome user "+name);
})
//passing multiple value using query param 
//  http://localhost:9090/multiple?id=100&name=Ramesh&salary=25000
app.get("/multiple",(req,res)=> {
    let id  = req.query.id;
    let name = req.query.name;
    let salary = req.query.salary;
    salary = eval(salary) +5000;    // eval() it is use to convert string to number. 
    res.send(`Your id is ${id}, <br/>name is ${name}, <br/>Gross Salary ${salary}`);
});

//passing single value using path param 
// http://localhost:9090/singlePath/Mahesh
app.get("/singlePath/:name",(req,res)=> {
    let userName = req.params.name;
    res.send("Welcome user using path param "+userName);
})

//passing multiple value using path param 
// http://localhost:9090/multiplePath/100/Ravi/25000

app.get("/multiplePath/:id/:name/:salary",(req,res)=> {
    //res.send(req.params);
    let lid = req.params.id;
    let lname = req.params.name;
    let lsalary = req.params.salary;
    //res.send()
    res.send(`${JSON.stringify(req.params)} <br/>Id is ${lid}, Name is ${lname} Salary is ${lsalary}`);
});


app.listen(port,()=>console.log(`Server running on port nubmer ${port}`));
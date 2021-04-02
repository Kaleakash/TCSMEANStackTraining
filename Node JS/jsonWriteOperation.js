let fs = require("fs");
var empObj = '{"id":100,"name":"Ravi","salary":12000}';
//convert string to object 
var empJson = JSON.parse(empObj);
console.log("Id is "+empJson.id);
//convert json to string 
var empString = JSON.stringify(empJson);
fs.writeFile("emp.json",empString,{flag:"a"},(err)=> {
    if(!err){
        console.log("Record stored successfully...")
    }
})

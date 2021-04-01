let fs = require("fs");
fs.readFile("emp.json",(err,data)=> {
    if(!err){
        //console.log(data.toString());
        let empString = data.toString()
        let empJson = JSON.parse(empString);
        console.log("id is "+empJson.id);
        console.log("name is "+empJson.name);
        console.log("salary is "+empJson.salary);
    }
})
/*let data = fs.readFileSync("emp.json");
let empString = data.toString();
let empJson = JSON.parse(empString);
        console.log("id is "+empJson.id);
        console.log("name is "+empJson.name);
        console.log("salary is "+empJson.salary);*/
console.log("other task")
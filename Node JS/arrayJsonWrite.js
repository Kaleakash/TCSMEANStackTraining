let fs = require("fs");
let emp1 = {"id":100, "name":"Ravi","salary":12000};
let emp2 = {"id":101, "name":"Ramesh","salary":14000};
let emp3 = {"id":103, "name":"Rajesh","salary":16000};
let emp = new Array();
emp.push(emp1);
emp.push(emp2);
emp.push(emp3);
// convert array object to string 
let jsonData = JSON.stringify(emp);
fs.writeFileSync("employee.json", jsonData);
console.log('file written');


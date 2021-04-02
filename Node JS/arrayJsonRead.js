let fs = require("fs");
let data = fs.readFileSync("employee.json");
console.log(data.toString());
let jsonString = data.toString();
let anotherJSON = JSON.parse(jsonString);
console.log("Number of records are "+anotherJSON.length);
console.log(anotherJSON[0].id);

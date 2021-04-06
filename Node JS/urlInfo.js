let url = require("url");
let urlDetails = "http://localhost:9090?name=Ravi&age=21";
//console.log(url.parse(urlDetails));
//console.log(url.parse(urlDetails).protocol)
//console.log(url.parse(urlDetails).host)
//console.log(url.parse(urlDetails).port)
//console.log(url.parse(urlDetails).query)
var details = url.parse(urlDetails,true).query;
console.log(details);
var name = details.name;
var age = details.age;
console.log(name+" "+age);
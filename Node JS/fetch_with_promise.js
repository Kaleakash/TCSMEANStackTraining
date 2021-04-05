/*var obj = new Promise((resolve,reject)=> {
    reject("Error generated")
   // resolve("Successfully done")
    
});*/
//obj.then().catch();
var fetch  = require("node-fetch");

fetch("https://jsonplaceholder.typicode.co").then(res=>res.json()).
then(result=>console.log(result)).catch(error=>console.log(error));
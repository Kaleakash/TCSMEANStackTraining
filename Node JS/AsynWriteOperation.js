let fs = require("fs");
var msg = "This is Asynchronous message store through FS module";
fs.writeFile("info1.txt",msg,{flag:"a"},(err)=>{
    if(!err){
        console.log("Data store in a file info1");
    }
});
fs.writeFile("info2.txt",msg,{flag:"a"},(err)=>{
    if(!err){
        console.log("Data store in a file info2");
    }
});
console.log("done...")
console.log("done...")
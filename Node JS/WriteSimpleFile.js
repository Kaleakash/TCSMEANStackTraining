let fs = require("fs"); //loaded core fs module 

let msg = "\nNext Message Added to file using Node JS command";

fs.writeFileSync("info.txt",msg,{flag:"a"});
console.log("file stored")
console.log("done...")
console.log("done...")
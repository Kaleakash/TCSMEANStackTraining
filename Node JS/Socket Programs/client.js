let net = require("net");
let client = net.connect({port:9090,host:"127.0.0.1"});
let readline = require("readline");     // install globally (external module)
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdoutput
})
client.on("connect",()=> {
    console.log("Connected to server....")
    
})
r1.on("line",(msg)=>{
    client.write(`Client send : ${msg}`);
})
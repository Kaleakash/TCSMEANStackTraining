let net = require("net");   // networking. 
let server = net.createServer();

server.on("connection",(socket)=>{
    console.log("new client connected....");
    
    socket.on("data",(msg)=>{
        console.log(msg.toString())    // recieve the data from client - server 
    });

});

server.listen(9090,()=>console.log("Server is running on port number 9090"));
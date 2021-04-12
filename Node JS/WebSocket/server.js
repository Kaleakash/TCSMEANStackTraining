var app = require("express")();
//loading express-ws and creating the reference ws module with help of app reference. 
var ws = require("express-ws")(app); 
app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})
app.ws("/",(socket,res)=> {
    socket.send("Message from Server....."); 
})
app.ws("/open",(data)=> {
    console.log(data.toString())
})

app.listen(9090,()=>console.log("WebSocket server running on port number 9090 "))


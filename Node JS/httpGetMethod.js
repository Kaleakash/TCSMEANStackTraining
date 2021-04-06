let http = require("http");
let url = require("url");
let port=9999;
let server = http.createServer((req,res)=> {
    let urlDetails = req.url;
    let data = url.parse(urlDetails,true).query;
    //console.log(urlDetails);
    var name = data.name
    var age = data.age
    res.end("Welcome to Http Module "+name+" Your age is "+age);
});

server.listen(port,
    ()=>console.log(`Server running on port number ${port}`));

    //     http://localhost:9999/?age=21&name=Lokesh


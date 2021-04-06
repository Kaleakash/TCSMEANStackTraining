let http = require("http");
let url = require("url");
let port = 9999;
let server = http.createServer((req,res)=> {
    var data = url.parse(req.url,true).query;
    if(data.user=="Ajay" && data.pass=="Kumar"){
        res.write("Successfully Login!");
    }else {
        res.write("Failure try once again");
    }
    res.end();
})
server.listen(port,()=>console.log(`running on port num ${port}`));
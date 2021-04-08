let http = require("http");
let port = 9999;
let server = http.createServer((request,response)=> {
        if(request.url=="/"){
            response.write("Welcome to About Us Page")
        }
        else if(request.url=="/contactus"){
            response.write("Welcome to Contact Us Page")
        }
        else if(request.url=="/login"){
            response.write("Welcome to Login Page")
        }else {
            response.write("Not found page");
        }
        response.end();
});

server.listen(port,()=>console.log(`Server is running on port number ${port}`));
let http = require("http");
let port = 9999;
let htmlContent = `
        <html>
            <head>

            </head>
            <body>
            <h1>Welcome to Node http module </h1>
            </body>
        </html>
`
let server = http.createServer((request,response)=> {
        response.end(htmlContent);
});

server.listen(port,()=>console.log(`Server is running on port number ${port}`));
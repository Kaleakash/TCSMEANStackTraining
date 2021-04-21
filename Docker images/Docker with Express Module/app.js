let app = require("express")()

app.get("/",(req,res)=> {
	res.send("Welcome to Express module using Docker");
})

app.listen(9999,()=>console.log("Server is running"))
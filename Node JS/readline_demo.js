let obj = require("readline");
let r1 = obj.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("Enter the name",(name)=>{
    r1.question("Enter the age",(age)=> {
    console.log("Your name is "+name+" Age is "+age);
    r1.close();
    })
})

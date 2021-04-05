/*console.log("Normal Statement - 1st ")
setTimeout(function(){
    console.log("Welcome to Asyc function using Node JS")
},2000);
setTimeout(()=>console.log("Welcome to Aysn function using Arrow"),1000);
console.log("Normal Statement - 2nd")
console.log("Normal Statement - 3rd")*/

console.log("Normal Statement - 1st")
setInterval(function(){
    console.log("normal function again ad again")
},2000)
setInterval(()=>console.log("Arrow functio again and again"),1000)
console.log("Normal Statement - 2nd")
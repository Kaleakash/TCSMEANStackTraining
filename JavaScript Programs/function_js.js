//Normal function 
function add(a,b){
    return a+b;
}
document.write("Normal Function <br/>")
document.write(add(100,200))

// expression style function 
var sum = function addNumber(a,b){
    return a+b;
}
document.write("<br/>Expression style Function <br/>")
document.write(sum(20,40));

var sumOfNumber = function(a,b){
    return a+b;
}
document.write("<br/>Expression style Function without Name<br/>")
document.write(sumOfNumber(20,40));

//callback function 
document.write("<br> Callback function<br/>");

function sayHello(fname,callback){
    document.write("<br/>Welcome, your name is "+callback(fname));
}
var maleInfo= function(fname) {
                return "Mr "+fname;
}
var femaleInfo= function(fname) {
    return "Miss "+fname;
}
sayHello("Raj",maleInfo);
sayHello("Ravi",maleInfo);
sayHello("Reeta",femaleInfo);
sayHello("Ajay",function(name){
    return "Mr "+name;
});


//Arrow function 
var 








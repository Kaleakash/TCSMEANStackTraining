var sayHello = function(name) {
        return "Welcome "+name;
}
var addNumber2 = function(a,b){
    var sum = a+b;
    return sum;
}
document.write("<br/> Expression style<br/>")
document.write(sayHello("Ravi"));
// arrow function is known as anonymous funtion 
// arrow function by default return the value. 
//1st Point if we want write code very less and not repeating same 
//logic again and again. 
document.write("<br/> Using Arrow function <br/>")
var sayHi = (name)=>"Welcome "+name;
document.write(sayHi("Ravi"))
document.write("<br/>")
var addNumber1 = (a,b)=>a+b;
var findLargest = (a,b)=> {
    if(a>b){
        return a;
    }else {
        return b;
    }
}
document.write("Addition of two number using arrow function and normal function <br/>")
document.write(addNumber1(100,200)+" "+addNumber2(100,200))
document.write("<br/>largest of two number is <br/>")
document.write(findLargest(2,4));


function dis1(){
    document.write("Normal function<br/>")
}
dis1();
dis1();
//Call function from same script 
// call function from another script 
// call function from html using events. 

//IIFE : Immediate Invoked function expression using anoymous function style 
(function(){
    document.write("<br/>This is type of IIEF function<br/>");
})();

//IIFE : Immediate Invoked function expression using arrow funtion style 
(()=>document.write("<br/>This is type of IIEF function using Arrow <br/>"))();


((a,b)=>document.write(a+b))(10,20);

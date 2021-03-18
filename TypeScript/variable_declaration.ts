var a=10;
a=30;           //re-assign 
var a=20;       //re-declaration 
console.log(a);
console.log(a);
let b=30;
b=50;           //re-declaration 
//let b=40;     //re-declaration not possible 
for(var i=0;i<100;i++){
    
}
console.log(i);
for(let j=0;j<100;j++){ //local scope 
    
}
//console.log(j); //we can't access j variable. 
const c=100;        // to declare the constant value. 
//c=200;            // we can't assign. we can't re-assign. 
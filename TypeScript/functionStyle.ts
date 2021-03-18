//1st function passing parameter with differernt typeo of values.
// it can return or may be return any type.
function empInfo(id:number,name:string,salary:number):any {
    console.log("id is "+id);
    console.log("name is "+name);
    console.log("salary is "+salary);
}
empInfo(100,"Ravi",12000);
// function must be return string value;
function sayHello(name:string) : string {
    return "Welcome "+name;
}
console.log(sayHello("Ramesh"));
// pass parameter but no return type
function add(a:number,b:number):void {
    let sum = a+b;
    console.log(sum);
}
add(100,200);
//optional parameter ? means default parameter 
//? from right side and passing value from left side. 
function personDetails(id?:number,name?:string,age?:number):void{
    console.log("id is "+id);
    console.log("name is "+name);
    console.log("age is "+age);
}

personDetails(123,"Ravi",21);
personDetails(124,"Ramesh");
personDetails(125)
personDetails();


//default initialization parameter  means default parameter 
//assing the value from right side and passing value from left side. 
function empDetails(id:number=0,name:string="Unknown",age:number=21){
    console.log("id is "+id);
    console.log("name is "+name);
    console.log("age is "+age);
}

empDetails(123,"Ravi",24);
empDetails(124,"Ramesh");
empDetails(125)
empDetails();
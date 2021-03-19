//ES5 style 
function Employee() {
    this.fname="Ajay Kumar";
    this.disEmpInfo=function() {
        console.log("Employee class function")
        console.log("Name is "+this.fname);
    }
}
let emp1 = new Employee();
emp1.disEmpInfo();
//ES6 --JavaScript as well as typescript 
class Person {
        fname:string="Ajay Kumar"
        disPersonInfo():void {
            console.log("Person class function")
            console.log("Name is "+this.fname);
        }
}
let p1 = new Person();
p1.disPersonInfo();
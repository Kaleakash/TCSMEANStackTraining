//ES5 style 
function Employee() {
    this.fname = "Ajay Kumar";
    this.disEmpInfo = function () {
        console.log("Employee class function");
        console.log("Name is " + this.fname);
    };
}
var emp1 = new Employee();
emp1.disEmpInfo();
//ES6 --JavaScript as well as typescript 
var Person = /** @class */ (function () {
    function Person() {
        this.fname = "Ajay Kumar";
    }
    Person.prototype.disPersonInfo = function () {
        console.log("Person class function");
        console.log("Name is " + this.fname);
    };
    return Person;
}());
var p1 = new Person();
p1.disPersonInfo();

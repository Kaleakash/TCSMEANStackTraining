// class concept 
/*class Employee {
    id:number=100;
    name:string="Ravi Kumar";
    salary:number=12000;

    empInfo():void {
        console.log("id is "+this.id);
        console.log("name is "+this.name);
        console.log("salary is "+this.salary);
    }
}
let emp1 = new Employee();
emp1.empInfo();
let emp2 = new Employee();
emp2.empInfo();
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// constructor concept 
/*
class Employee {
    constructor() {
        console.log("object created...")
    }
    disInfo() : void {
        console.log(" employee function");
    }
}
let emp1 = new Employee();
emp1.disInfo();
emp1.disInfo();
emp1.disInfo();
*/
// parameterized cosntructor 
/*
class Employee {
    id:number;
    name:string;
    salary:number;
    constructor(id:number,name?:string,salary:number=8000) {
            this.id = id;
            this.name = name;
            this.salary = salary;
    }
    disInfo() : void {
        console.log("id is "+this.id);
        console.log("name is "+this.name);
        console.log("salary is "+this.salary);
    }
}
let emp1 = new Employee(100,"Ravi",12000);
emp1.disInfo();
let emp2 = new Employee(101,"Ajay",14000);
emp2.disInfo();
let emp3 = new Employee(102,"Mahesh");
emp3.disInfo();
let emp4 = new Employee(103);
emp4.disInfo();
*/
// parameterized constructor with short cut initialization 
/*class Employee {
    constructor(private id:number,private name?:string,public salary:number=8000) {}
    disInfo() : void {
        console.log("id is "+this.id);
        console.log("name is "+this.name);
        console.log("salary is "+this.salary);
    }
}
let emp1 = new Employee(100,"Ravi",12000);
emp1.salary=14000;
console.log("Salary is "+emp1.salary);
emp1.disInfo();*/
//Inheritance example 
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.disEmp = function () {
        console.log("Employee class function");
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.disMgr = function () {
        console.log("Manager class function");
    };
    return Manager;
}(Employee));
var emp1 = new Employee();
emp1.disEmp();
var mgr1 = new Manager();
mgr1.disMgr();
mgr1.disEmp();

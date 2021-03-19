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
/*
class Employee {        //super class it must be generics 
    disEmp() {
        console.log("Employee class function")
    }
}
class Manager extends Employee{ //sub class : specific 
    disMgr() {
        console.log("Manager class function")
    }
}
let emp1 = new Employee();
emp1.disEmp();
let mgr1 = new Manager();
mgr1.disMgr();
mgr1.disEmp();
*/

//Interface example 
/*interface Emp {
        id:number;
        dis():void;     // incomplete functions. 
}
class EmpInfo implements Emp {
    id:number=100;
    dis():void {
        console.log("dis function implemeted by Emp info class")
    }
}*/


// interface with variable 
interface Employee {
        id:number;
        name:string;
        salary:number;
        age?:number;
}
let emp1:Employee={id:100,name:"Ravi",salary:12000}; //object literal style
let emp2:Employee={id:101,name:"Ravi",salary:14000}; //object literal style
let emp3:Employee={id:102,name:"Mahesh",salary:12000,age:21}; //object literal style

//interface with functions (incomplete)
// interface is use to achieve abstraction 

interface Bike {        // specification 
    speed():void
}
class Honda implements Bike {       // implementation 
    speed() : void {
        console.log("60km/hr")
    }
}
class Pulsar implements Bike {
    speed() : void {
        console.log("90km/hr")
    }
}
//let bb = new Bike();
let hh = new Honda();
let pu = new Pulsar();
hh.speed();
pu.speed();












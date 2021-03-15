//object : any real world entity 
//Person, Place, Bank, Car, Animal, Account , Employee 
/*
    state or property, have, variable/fields  
    behaviour       , do    , function/methods 
*/
//ES5 
function Employee(id,name) {

        this.id = id;
        this.name = name;

        this.display = function() {
            document.write("<br/>")
            document.write("id is "+this.id)
            document.write("<br/>name is "+this.name);
        }
        var that = this;
        // Normal function want to access Employee id property 
        function dis() {
            // this can't access within normal function 
            document.write("<br/>Id is "+that.id);
        }       
        dis();
        //Arrow funtion in arrow funtion we can use this keywords 
        var dis1=()=>document.write("<br/>id is in arrow function"+this.id)
        dis1();
}

var emp1 = new Employee(100,"Ravi");
emp1.display();
Employee.prototype.age = 21;    // added run time property using prototype. 
Employee.prototype.info = function(){   //added time function to employee objects. 
    document.write("<br/>This run time behaviour aded...")
}
//emp1.prototype.desg="Tester";       // this property added on emp1 reference. 
document.write("<br/>After added age property")
document.write("<br/>id is "+emp1.id);
document.write("<br/>name is "+emp1.name);
document.write("<br/>Age is "+emp1.age);
document.write("<br/>Desg is "+emp1.desg);
var emp2 = new Employee(101,"Ramesh");
document.write("<br/>For Another Object")
document.write("<br/>id is "+emp2.id);
document.write("<br/>name is "+emp2.name);
document.write("<br/>Age is "+emp2.age);
document.write("<br/>Desg is "+emp2.desg);
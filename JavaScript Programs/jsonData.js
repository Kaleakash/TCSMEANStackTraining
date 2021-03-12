/*
object : any real world entity 
example 
person 
car 
animal 
bank 

*/
//one way object creation using object literal style. 

var empObject = {id:100,name:"Ramesh",salary:12000};
document.write("Employee Object <br/>")
document.write(empObject)
document.write("<br/>Id is "+empObject.id)
document.write("<br/>Name is "+empObject.name)
document.write("<br/>Salary is "+empObject.salary)

//convert object into string format 
var empString = JSON.stringify(empObject);
document.write("<br/>")
document.write("Emp object in string format<br/>")
document.write(empString)
document.write("<br/>Id is "+empString.id)
document.write("<br/>Name is "+empString.name)
document.write("<br/>Salary is "+empString.salary)

// convert string to json format 
var empJson = JSON.parse(empString);
document.write("<br/>")
document.write("Emp object in json format<br/>")
document.write(empJson)
document.write("<br/>Id is "+empJson.id)
document.write("<br/>Name is "+empJson.name)
document.write("<br/>Salary is "+empJson.salary)

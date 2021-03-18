//1st function passing parameter with differernt typeo of values.
// it can return or may be return any type.
function empInfo(id, name, salary) {
    console.log("id is " + id);
    console.log("name is " + name);
    console.log("salary is " + salary);
}
empInfo(100, "Ravi", 12000);
// function must be return string value;
function sayHello(name) {
    return "Welcome " + name;
}
console.log(sayHello("Ramesh"));
// pass parameter but no return type
function add(a, b) {
    var sum = a + b;
    console.log(sum);
}
add(100, 200);
//optional parameter ? means default parameter 
//? from right side and passing value from left side. 
function personDetails(id, name, age) {
    console.log("id is " + id);
    console.log("name is " + name);
    console.log("age is " + age);
}
personDetails(123, "Ravi", 21);
personDetails(124, "Ramesh");
personDetails(125);
personDetails();
//default initialization parameter  means default parameter 
//assing the value from right side and passing value from left side. 
function empDetails(id, name, age) {
    if (id === void 0) { id = 0; }
    if (age === void 0) { age = 21; }
    console.log("id is " + id);
    console.log("name is " + name);
    console.log("age is " + age);
}
empDetails(123, "Ravi", 24);
empDetails(124, "Ramesh");
empDetails(125);
empDetails();

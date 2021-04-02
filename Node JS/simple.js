/*module.exports.a = "Welcome to Node JS Module example";
module.exports.b = "Another simple message"
module.exports.dis= function(){
    return "Welcome to Node JS Module Example";
}
exports.add= function(a,b){
    return a+b;
}

let sayHello= (name)=>"Welcome to user "+name;

class Employee {
    display() {
        console.log("display function");
    }
}
module.exports={Employee}
//exports.Employee=Employee;
//exports.sayHello=sayHello;
exports.sayHi = sayHello;
*/

/*

window.document.write("Welcome")
document.write("welcome");
*/


class Employee {
    display() {
        console.log("display function");
    }
}
let sayHello= (name)=>"Welcome to user "+name;

module.exports={Employee,sayHello}



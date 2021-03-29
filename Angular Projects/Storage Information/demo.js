function fun(){
let obj = '{"user":"Ravi","pass":"123"}';
console.log(obj.user);
//convert string to json 
sessionStorage.setItem("key1",obj);

let fromStorage = sessionStorage.getItem("key1");

let jsonInfo = JSON.parse(fromStorage);
console.log("Name is "+jsonInfo.user)
}
fun();
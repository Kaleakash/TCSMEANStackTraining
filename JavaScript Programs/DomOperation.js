function onFormSubmit(){
    //alert("Event generated...")
    var data = readFormData();
    insertNewRecord(data);
    resetData();
}

function readFormData() {
    var obj = {}    // empty object
    obj.name = document.getElementById("name").value;
    obj.age = document.getElementById("age").value;
    console.log(obj);
    return obj; 
}
function insertNewRecord(data){
 var table = document.getElementById("employeeList")
 var body = table.getElementsByTagName("tbody")[0];
 var newRow = body.insertRow(body.length);  // row created 

 var cell1 = newRow.insertCell(0);          // cell created 
 cell1.innerHTML=data.name;                 // value placed 

 var cell2 = newRow.insertCell(1);          // cell created 
 cell2.innerHTML=data.age;                 // value placed

}

function resetData() {
document.getElementById("name").value="";
document.getElementById("age").value="";
}


var empData=[];
function storeInSession() {
   // localStorage.setItem("empInfo",JSON.stringify(empData));
   sessionStorage.setItem("empInfo",JSON.stringify(empData));
}
function retrieveFromSession() {
    //var obj = JSON.parse(localStorage.getItem("empInfo"));
    var obj = JSON.parse(sessionStorage.getItem("empInfo"));
    console.log(obj);
}
function onFormSubmit() {
    var formData = readData();
    insertNewRecords(formData);
    resetForm();
    empData.push(formData);  
    console.log(empData)
}
function readData() {
    var formData={};
    formData.name=document.getElementById("name").value;
    formData.age = document.getElementById("age").value;
    return formData;
}
function insertNewRecords(formData) {
    var table = document.getElementById("employeeDetails");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var newRow = tableBody.insertRow(tableBody.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML=formData.name;
    var cell2 =newRow.insertCell(1);
    cell2.innerHTML= formData.age;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML="<a href='#' onclick='deleteRec(this)'>X</a>";
 
}
function deleteRec(data){
    var row = data.parentElement.parentElement;
    document.getElementById("employeeDetails").deleteRow(row.rowIndex);
}
var data;
function updateRec(data){
    this.data = data;
    var row = data.parentElement.parentElement;
    var cells = row.getElementsByTagName("td");
    var name = cells[0].innerHTML;
    var age =  cells[1].innerHTML;
    document.getElementById("name").value=name;
    document.getElementById("age").value=age; 
    document.getElementById("b1").value="Update Record"  
}
function resetForm() {
    document.getElementById("name").value="";
    document.getElementById("age").value="";  
}
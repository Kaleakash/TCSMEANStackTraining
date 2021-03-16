function retrieve() {
    console.log("Another page")
    var obj = JSON.parse(sessionStorage.getItem("empInfo"));
    console.log(obj);
}
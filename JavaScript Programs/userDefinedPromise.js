var option = prompt("Enter your option")
var obj = new Promise(function(resolve,rejected){
    if(option=="Yes"){
        resolve("Successfully done the task!")
    }else {
        rejected("Failure - Error generated")
    }
});
//Asynchronouse callback function then exeucute only if 
//promise resolve else catch execute
obj.then(data=>document.write(data)).catch(error=>document.write(error));
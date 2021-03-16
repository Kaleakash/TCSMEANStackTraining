function addBlog(){
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    var imageInfo = document.getElementById("imageId").files[0].name;
    console.log(title)
    console.log(desc);
    console.log(imageInfo);
    document.getElementById("titleInfo").innerHTML=title;
    document.getElementById("descInfo").innerHTML=desc;
    document.getElementById("imageInfo").src=imageInfo;
}
document.body.innerHTML="";
var page = document.createElement("iframe");
page.src = prompt("Please Enter Page URL : ")
document.body.appendChild(page);

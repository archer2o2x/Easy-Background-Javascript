document.body.innerHTML="";
var page = document.createElement("iframe");
page.src = prompt("Please Enter Page URL : ")
page.height = window.innerHeight;
page.width = window.innerWidth;
document.body.appendChild(page);

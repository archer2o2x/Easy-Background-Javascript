var link = prompt("Please Enter A URI :");
document.body.innerHTML = "";
var image = document.createElement('img');
image.setAttribute('src', link);
image.setAttribute('style', 'width:' + window.innerWidth +'px;height:' + window.innerHeight +'px');
document.body.appendChild(image);
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 122) {
    image.setAttribute('style', 'width:' + window.innerWidth +'px;height:' + window.innerHeight +'px');
  }
}, false);

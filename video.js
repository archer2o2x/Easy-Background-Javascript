document.body.innerHTML = ""
var video = document.createElement('video');
video.height = window.innerHeight;
video.width = window.innerWidth;
video.controls = true;
var source = document.createElement('source');
source.src = prompt("Please enter video URL.");
video.appendChild(source);
document.body.appendChild(video);

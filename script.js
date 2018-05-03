var poster = document.getElementById("poster");
poster.style.height = poster.offsetWidth * (297/210) + "px";

var container = document.getElementById("recursive-container");

var title = "the smiths";
var length = 10;
var rotateInterval = 8;

for(var i = 0; i<length; i++){
  var recursiveTitle = document.createElement("DIV");
  recursiveTitle.innerHTML = title;
  recursiveTitle.classList.add("recursive-title");
  recursiveTitle.style.transform = "rotate(" + 90*((i)/(length-1)) + "deg) translate(-50%,-50%)";
  recursiveTitle.style.transformOrigin = "-50% 0";
  if(i != 0){
    recursiveTitle.style.opacity = ((length-i)/length)*1;
  }else{
    recursiveTitle.classList.add("top-color");
  }

  container.appendChild(recursiveTitle);
}

container.style.left = document.getElementById("recursive-container").children[0].offsetWidth/2 + "px";

container.style.transform = "translate(0,"+ document.getElementById("recursive-container").children[0].offsetHeight/2 + "px";


document.getElementById("recursive-wrapper").style.height = document.getElementById("recursive-container").children[0].offsetWidth + "px";

document.getElementById("recursive-wrapper").style.width = document.getElementById("recursive-container").children[0].offsetWidth + "px";

function rotate(){
  container.classList.toggle("initial");
}

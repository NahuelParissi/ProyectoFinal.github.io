
//Boton "leer"

function showText() {
  var text = document.getElementById("text");
  if (text.style.display === "block") {
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
}

function changeText() {
  var button = document.getElementById("learn-more");
  if(button.textContent === "Leer"){
    button.textContent = "Ocultar"
  } else {
    button.textContent = "Leer"
  }
} 

//Boton "Mostrar Skills"

const button = document.getElementById("complete");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

let show = true;

button.addEventListener("click", function() {
  if (show) {
    bar1.style.width = "80%";
    bar2.style.width = "50%";
    bar3.style.width = "70%";
  } else {
    bar1.style.width = "0%";
    bar2.style.width = "0%";
    bar3.style.width = "0%";
  }
  show = !show;

  if(button.textContent ==="Mostrar Skills"){
    button.textContent = "Ocultar Skills"
  } else{
    button.textContent = "Mostrar Skills"
  }
    
});

//Contador

document.getElementById("like-button").addEventListener("click", function() {
  var likeCount = parseInt(document.getElementById("like-count").innerHTML.split(" ")[0]);
  likeCount = likeCount + 1;
  document.getElementById("like-count").innerHTML = likeCount + " likes";
});

document.getElementById("like-button-2").addEventListener("click", function() {
  var likeCount = parseInt(document.getElementById("like-count-2").innerHTML.split(" ")[0]);
  likeCount = likeCount + 1;
  document.getElementById("like-count-2").innerHTML = likeCount + " likes";
});

document.getElementById("like-button-3").addEventListener("click", function() {
  var likeCount = parseInt(document.getElementById("like-count-3").innerHTML.split(" ")[0]);
  likeCount = likeCount + 1;
  document.getElementById("like-count-3").innerHTML = likeCount + " likes";
});
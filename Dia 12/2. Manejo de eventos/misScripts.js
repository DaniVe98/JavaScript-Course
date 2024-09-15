let div = document.getElementById("miDiv");
let enlace = document.getElementById("miEnlace");

function evitarEnlace(event){
  event.preventDefault();
  alert("Enlace no habilitado");
}

function mostrarMensaje(event){
  alert(event.currentTarget.nodeName);
  alert(event.target.nodeName);
}

div.addEventListener('click', mostrarMensaje);
enlace.addEventListener('click', evitarEnlace);
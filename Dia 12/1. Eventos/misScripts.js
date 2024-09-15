let boton = document.getElementById("miBoton");

// boton.addEventListener('click', function(){
//   alert('El boton fue presionado');
// });

function mostrarMensaje(){
  alert('El boton fue presionado');
}

function otroMensaje(){
  alert('Flotar');
}

boton.addEventListener('click', mostrarMensaje);
boton.addEventListener('mouseover', otroMensaje);
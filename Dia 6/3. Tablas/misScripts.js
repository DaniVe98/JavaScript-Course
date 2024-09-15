function multiplicar(){
  // Obtener el numero
  let elementoTextoTabla = document.getElementById("textoTabla");
  let textoNumeroTabla = elementoTextoTabla.value;
  let numeroTabla = Number(textoNumeroTabla);

  // Obtener la tabla
  let elementoMultiplicar = document.getElementById("listaTabla");

  // Producir y mostrar resultados
  for(let x=1; x<11; x++){
    // Calcular el resultado
    let numeroResultado = numeroTabla * x;

    // Armar string con resultado
    let textoResultado = numeroTabla + " por " + x + " es igual a " + numeroResultado;

    // Crear un elemento de la lista
    let itemLista = document.createElement("li");
    itemLista.innerText = textoResultado;
    elementoMultiplicar.appendChild(itemLista);
  }
}
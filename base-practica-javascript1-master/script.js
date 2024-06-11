import { barcelona, roma, paris, londres } from "./ciudades.js";

//Obtener los elementos del DOM

let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subtiutloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    //remover activo
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });
    this.classList.add("active");

    let contenido = obtenerContenido(this.textContent);
    //agregar el activo que corresponda
    tituloElemento.innerHTML = contenido.titulo;
    subtiutloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    //traer la informacion del objeto correspondiente a la eleccion
  });
});

//funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    Paris: paris,
    Londres: londres,
  };
  return contenido[enlace];
}

import { buscar } from "./buscar.js";
import { imports } from "./imports.js";
import { pintarDatos } from "./pintarDatos.js";
import { mostrarSeleccion } from "./seleccionar.js";
import { url } from "./url.js";
import { filtrar } from "./filtrar.js";
import { cambiarTema } from "./cambiarTema.js";
import { inicializarTema } from "./cambiarTema.js";

// const seccionBuscar = imports().seccionBuscar;
const seccionBuscar = document.getElementById("formBusqueda");
const boton = document.getElementById("paises");
const seccionPaises = imports().seccionPaises;
const filtro = imports().filtro;
const btnCambiarTema = imports().btnCambiarTema;

document.addEventListener("DOMContentLoaded", pintarDatos);

seccionBuscar.addEventListener("submit", buscar);

filtro.addEventListener("click", filtrar);

//Cambio de tema
btnCambiarTema.addEventListener("click", cambiarTema);
document.addEventListener("DOMContentLoaded", inicializarTema);

boton.addEventListener("click", async (e) => {
   e.preventDefault();

   const buscado = e.target.classList.contains("btnMoreInfo");
   const id = e.target.id;

   if (buscado) {
      const res = await fetch(url);
      const data = await res.json();

      let resultado = data.find((u) => u.id === id);
      console.log(resultado);

      localStorage.setItem("Pais", JSON.stringify(resultado));
      //   mostrarSeleccion();
      window.location.href = "seleccion.html";
   }
});

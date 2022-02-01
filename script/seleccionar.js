import { imports } from "./imports.js";
import { cambiarTema } from "./cambiarTema.js";
import { inicializarTema } from "./cambiarTema.js";

const seccionSelecciones = imports().seccionSeleccion;
const btnCambiarTema = document.getElementById("darkMode");

export const mostrarSeleccion = () => {
   const sel = JSON.parse(localStorage.getItem("Pais"));
   const { nombre, imagen, poblacion, region, capital, descripcion } = sel;

   console.log(sel);

   seccionSelecciones.innerHTML += `
   <div class="tarjetaSeleccion" >
       <img
           src=${imagen}
           alt=${nombre}
       />
       <h3>${nombre}</h3>
       <div class="datos">
           <p><span>Population:</span>${poblacion}</p>
           <p><span>Region:</span>${region}</p>
           <p><span>Capital:</span>${capital}</p>
           <p><span>Description:</span>${descripcion}</p>
       </div>
   </div>
    `;
};

document.addEventListener("DOMContentLoaded", mostrarSeleccion);

//Cambio de tema
btnCambiarTema.addEventListener("click", cambiarTema);
document.addEventListener("DOMContentLoaded", inicializarTema);

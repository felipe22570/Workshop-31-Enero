import { imports } from "./imports.js";
import { pintarDatos } from "./pintarDatos.js";
import { url } from "./url.js";

//const busqueda = imports().busqueda;

const seccionPaises = imports().seccionPaises;

export const buscar = async (e) => {
   e.preventDefault();
   const busqueda = document.getElementById("busqueda").value;
   const res = await fetch(url);
   const data = await res.json();

   const { id, imagen, nombre, region, capital } = data;

   const resultado = data.find(
      (u) => u.nombre.toLocaleLowerCase() === busqueda.toLocaleLowerCase()
   );

   console.log(busqueda);

   if (resultado !== undefined) {
      const { id, imagen, nombre, region, capital, poblacion } = resultado;

      seccionPaises.innerHTML = `
            <div class="tarjetaPais" >
            <img
               src=${imagen}
               alt=${nombre}
            />
            <h3>${nombre}</h3>
            <div class="datos">
               <p><span>Population: </span>${poblacion}</p>
               <p><span>Region: </span>${region}</p>
               <p><span>Capital: </span>${capital}</p>
            </div>
            <button id=${id} class="btnMoreInfo">More info</button>
      </div>
        `;
   } else {
      alert("El país no se ha encontrado");
      seccionPaises.innerHTML = "";
      pintarDatos();
   }
};

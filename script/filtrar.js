import { imports } from "./imports.js";
import { pintarDatos } from "./pintarDatos.js";
import { url } from "./url.js";

//element.find((u) => u.region.toLocaleLowerCase() === filtro.toLocaleLowerCase());

const seccionPaises = imports().seccionPaises;

export const filtrar = async (e) => {
   e.preventDefault();

   const filtro = imports().filtro.value;
   const res = await fetch(url);
   const data = await res.json();

   //const { id, imagen, nombre, region, capital } = data;

   let resultado = data.filter((u) => u.region === filtro);

   console.log(filtro);

   if (filtro !== "filterbyregion") {
      seccionPaises.innerHTML = "";

      resultado.forEach((element) => {
         const { id, imagen, nombre, region, capital, poblacion } = element;

         seccionPaises.innerHTML += `
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
                <a href="seleccion.html" id=${id} class="btnMoreInfo">More info</a>
            </div>
            `;
      });
   } else {
      seccionPaises.innerHTML = "";
      pintarDatos();
   }
};

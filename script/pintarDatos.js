import { imports } from "./imports.js";
import { url } from "./url.js";

const seccionPaises = imports().seccionPaises;

export const pintarDatos = async () => {
   const res = await fetch(url);
   const data = await res.json();

   data.forEach((element) => {
      const { id, imagen, nombre, poblacion, region, capital } = element;

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
            <button id=${id} class="btnMoreInfo">More info</button>
        </div>
        `;
   });
};

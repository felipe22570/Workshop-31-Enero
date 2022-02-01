import { imports } from "./imports.js";

const body = imports().body;

export const cambiarTema = () => {
   let temaActual = localStorage.getItem("modo");

   if (temaActual === "dark") {
      localStorage.setItem("modo", "light");
      body.setAttribute("class", "light");
   } else {
      localStorage.setItem("modo", "dark");
      body.setAttribute("class", "dark");
   }
};

export const inicializarTema = () => {
   let temaActual = localStorage.getItem("modo");

   if (temaActual === null) {
      localStorage.setItem("modo", "light");
   }
   if (temaActual === "dark") {
      localStorage.setItem("modo", "dark");
      body.setAttribute("class", "dark");
   }
};

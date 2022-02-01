export function imports() {
   const seccionPaises = document.getElementById("paises");
   const seccionBuscar = document.getElementById("formBusqueda");
   //const busqueda = document.getElementById("busqueda").value;
   const filtro = document.getElementById("filtro");
   const body = document.querySelector("body");
   const btnCambiarTema = document.getElementById("darkMode");
   const seccionSeleccion = document.getElementById("selecciones");

   const importaciones = {
      seccionPaises,
      seccionBuscar,
      filtro,
      body,
      btnCambiarTema,
      seccionSeleccion,
   };
   return importaciones;
}

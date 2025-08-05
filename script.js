//document.querySelector("nav").classList.toggle("nav-open");
//  busca la etiqueta <nav> y le agrega o remueve la clase nav-open. 
// Esta clase es la que tú debes usar en tu CSS para mostrar el menú.

document.getElementById("nav-toggle").addEventListener("click", function() {
  document.querySelector("nav").classList.toggle("nav-open");
});

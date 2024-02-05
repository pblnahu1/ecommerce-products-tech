// Este Script sirve para mostrar elementos cada vez que se hace click en un botón
// También sirve para cerrar las ventanas que ocurren cuando hay un problema de inicio de sesión o cuando el usuario ha cerrado la sesión.

const mostrarVentanaFavoritos = () => {
  let divFav = document.getElementById("divFavoritos");
  let miDiv = document.getElementById("miDiv");
  if (divFav.style.display == "none") {
    divFav.style.display = "block";
    miDiv.style.display = "none";
  } else {
    divFav.style.display = "none";
  }
}

const mostrarCarrito = () => {
  let miDiv = document.getElementById("miDiv");
  let divFav = document.getElementById("divFavoritos");
  if (miDiv.style.display == "none") {
    miDiv.style.display = "block";
    divFav.style.display = "none";
  } else {
    miDiv.style.display = "none";
  }
}

// Para cerrar ventana
const contenedor = document.querySelector('.div-msg-error, .div-msg-cerrar-sesion');
const btn = document.getElementById('btn-cerrar');
btn.addEventListener('click', function () {
  contenedor.style.display = 'none';
});


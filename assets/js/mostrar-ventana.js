function mostrarVentanaFavoritos() {
    var divFav = document.getElementById("divFavoritos");
    var miDiv = document.getElementById("miDiv");
    if (divFav.style.display == "none") {
        divFav.style.display = "block";
        miDiv.style.display = "none";
    } else {
        divFav.style.display = "none";
    }
}

function mostrarCarrito() {
    var miDiv = document.getElementById("miDiv");
    var divFav = document.getElementById("divFavoritos");
    if (miDiv.style.display == "none") {
        miDiv.style.display = "block";
        divFav.style.display = "none";
    } else {
        miDiv.style.display = "none";
    }
}

const contenedor = document.querySelector('.div-msg-error, .div-msg-cerrar-sesion');
const btn = document.getElementById('btn-cerrar');

btn.addEventListener('click', function() {
    contenedor.style.display = 'none';
})

function mostrarParrafoPreguntas(element) {
    var parrafoPreguntas = element.querySelector(".texto-preguntas");
    if (parrafoPreguntas.style.display === "none" || !parrafoPreguntas.style.display) {
        parrafoPreguntas.style.display = "block";
    } else {
        parrafoPreguntas.style.display = "none";
    }
}

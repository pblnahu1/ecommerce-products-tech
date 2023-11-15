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

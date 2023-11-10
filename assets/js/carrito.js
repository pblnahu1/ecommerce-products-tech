
document.addEventListener('DOMContentLoaded', function () {
    var botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
    var total = 0;
    botonesAgregarCarrito.forEach(function (boton) {
        boton.addEventListener('click', function () {
            var nombreProducto = boton.getAttribute('data-nombre');
            var precioProducto = parseFloat(boton.getAttribute('data-precio'));
            var imgProducto = boton.getAttribute('data-img');

            var nuevoProducto = document.createElement('div');
            nuevoProducto.classList.add('producto-carrito');
            nuevoProducto.innerHTML = '<div class="div-img-carrito prod-carr"><img src="' + imgProducto + '"></div><div class="div-info-carrito prod-carr"><span class="span-nombre">' + nombreProducto + '</span><span class="span-precio">$' + precioProducto + '</span></div>';

            total += precioProducto;
            var contenedorTotalProductos = document.getElementById('total');
            contenedorTotalProductos.innerHTML = 'Total: $' + total;

            var contenedorCarrito = document.getElementById('contenedor-carrito');
            contenedorCarrito.appendChild(nuevoProducto);
        });
    });
});

function mostrarCarrito() {
    var miDiv = document.getElementById("miDiv");
    if (miDiv.style.display == "none") {
        miDiv.style.display = "block";
    } else {
        miDiv.style.display = "none";
    }
}


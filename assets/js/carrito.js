// VERSION 2.0 ARCHIVO JS DEL CARRITO AGREGANDO LOS PRODUCTOS MEDIANTE EL ARCHIVO `productos.json`

var productosAgregados = 0;

document.addEventListener('DOMContentLoaded', function () {

    fetch('assets/js/productos.json')
        .then(response => response.json())
        .then(data => {
            var botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
            var mensajeCarrito = document.querySelector('.msg-carrito');
            var total = 0;
            botonesAgregarCarrito.forEach(function (boton, index) {
                boton.addEventListener('click', function () {
                    mensajeCarrito.style.display = "none";

                    var producto = data[index];

                    var nuevoProducto = document.createElement('div');
                    nuevoProducto.classList.add('producto-carrito');
                    nuevoProducto.innerHTML = `
                        <div class="div-img-carrito prod-carr">
                            <img src="${producto.img}">
                        </div>
                        <div class="div-info-carrito prod-carr">
                            <span class="span-nombre">${producto.nombre}</span>
                            <span class="span-precio">$${producto.precio}</span>
                        </div>
                        <button class="btn-remover-producto" onclick="eliminarProducto(this)">
                            <i class="fas fa-trash" style="color:red;"></i>
                        </button>
                    `;

                    var precioProducto = parseFloat(`${ producto.precio }`);
                    total += precioProducto;
                    productosAgregados++;

                    numeroProductosAgregados();
                    actualizarTotal();

                    var contenedorCarrito = document.getElementById('contenedor-carrito');
                    contenedorCarrito.appendChild(nuevoProducto);
                });
            });

            function numeroProductosAgregados() {
                var numeroDiv = document.getElementById('numero');
                numeroDiv.textContent = productosAgregados;
            }

            function actualizarTotal() {
                var contenedorTotalProductos = document.getElementById('total');
                contenedorTotalProductos.innerHTML = '<span>Total: $' + total + '</span>';
            }

            window.eliminarProducto = function (botonEliminar) {
                var productoEliminado = botonEliminar.parentElement;
                var precioEliminado = parseFloat(productoEliminado.querySelector('.span-precio').innerText.slice(1)); // obtener el precio del producto eliminado

                total -= precioEliminado;
                productosAgregados--;

                numeroProductosAgregados();
                actualizarTotal();

                productoEliminado.remove();
            }
        })

        .catch(error => console.error('Error al cargar el archivo JSON: ', error));
});

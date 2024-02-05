// ARCHIVO JS DEL CARRITO AGREGANDO LOS PRODUCTOS MEDIANTE EL ARCHIVO `productos.json`

let productosAgregados = 0;

document.addEventListener('DOMContentLoaded', function () {

  fetch('assets/js/productos.json')
    .then(response => response.json())
    .then(data => {
      let botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
      let mensajeCarrito = document.querySelector('.msg-carrito');
      let btnComprar = document.getElementById("btn-finalizarcompra");
      let total = 0;
      botonesAgregarCarrito.forEach(function (boton, index) {
        boton.addEventListener('click', function () {
          mensajeCarrito.style.display = "none";

          let producto = data[index];

          let nuevoProducto = document.createElement('div');
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

          let precioProducto = parseFloat(`${producto.precio}`);
          total += precioProducto;
          productosAgregados++;

          numeroProductosAgregados();
          actualizarTotal();

          let contenedorCarrito = document.getElementById('contenedor-carrito');
          contenedorCarrito.appendChild(nuevoProducto);
        });
      });

      function numeroProductosAgregados() {
        let numeroDiv = document.getElementById('numero');
        numeroDiv.textContent = productosAgregados;
      }

      function actualizarTotal() {
        let contenedorTotalProductos = document.getElementById('total');
        contenedorTotalProductos.innerHTML = `<span>Total: $${total}</span>`;
      }

      window.eliminarProducto = function (botonEliminar) {
        let productoEliminado = botonEliminar.parentElement;
        let precioEliminado = parseFloat(productoEliminado.querySelector('.span-precio').innerText.slice(1)); // obtener el precio del producto eliminado

        total -= precioEliminado;
        productosAgregados--;

        numeroProductosAgregados();
        actualizarTotal();

        productoEliminado.remove();
      }


      btnComprar.addEventListener("click", () => {
        if (total === 0) {
          const showAlert = () => {
            Swal.fire({
              title: `No es posible hacer la compra`,
              text: `Debes agregar algo a tu carrito para poder comprar`,
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          };

          showAlert();
        } else {
          const showAlert = () => {
            Swal.fire({
              title: `¡Compra Realizada!`,
              text: `Has comprado satisfactoriamente. Pagaste un total de "$${total}"`,
              icon: 'success', // Puedes cambiar esto a 'success', 'warning', 'error', etc.
              confirmButtonText: 'Ok'
            });
          };

          showAlert();
        }
      });
    })

    .catch(error => console.error('Error al cargar el archivo JSON: ', error));
});

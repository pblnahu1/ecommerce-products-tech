// ARCHIVO JS DE FAVORITOS AGREGANDO LOS PRODUCTOS MEDIANTE EL ARCHIVO `productos.json`

const heart = document.getElementsByClassName('heart');

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener('click', function () {
    this.classList.toggle('selected');
  })
}

document.addEventListener('DOMContentLoaded', function () {
  fetch('assets/js/productos.json')
    .then(response => response.json())
    .then(data => {
      let productosAgregados = [];
      let botonFavorito = document.querySelectorAll('.heart');
      let mensajeFavorito = document.querySelector('.msg-favoritos');
      let contenedorFav = document.getElementById('contenedor-fav');

      botonFavorito.forEach(function (btn, index) {
        btn.addEventListener('click', function () {
          mensajeFavorito.style.display = "none";

          let producto = data[index];

          if (!productosAgregados.includes(producto)) {
            productosAgregados.push(producto);
            let nuevoProductoFav = document.createElement('div');
            nuevoProductoFav.classList.add('producto-carrito');
            nuevoProductoFav.innerHTML = `
              <div class="div-img-carrito prod-carr">
                <img src="${producto.img}">
              </div>
              <div class="div-info-carrito prod-carr">
                <span class="span-nombre">${producto.nombre}</span>
                <span class="span-precio">$${producto.precio}</span>
              </div>
              <button class="btn-remover-producto" onclick="eliminarProductoFav(this)">
                <i class="fas fa-trash" style="color:red;"></i>
              </button>
            `;
            contenedorFav.appendChild(nuevoProductoFav);
          } else {
            console.log('¡Este producto ya está agregado!');
          }
        });
      });

      window.eliminarProductoFav = function (btnEliminar) {
        let productoFavEliminado = btnEliminar.parentElement;
        productoFavEliminado.remove();
      }
    })

    .catch(error => console.error('Error al cargar el archivo JSON: ', error));
});
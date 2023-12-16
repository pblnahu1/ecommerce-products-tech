<?php
include("conex.php");
// Leer el contenido JSON
$json = file_get_contents('../js/productos.json');
$productos = json_decode($json, true); // Decodifico el JSON a un arary asociativo

// Itero sobre la informacion de los productos e insertarlos en la base de datos
foreach($productos as $producto){
    // $id = $producto['id_productos'];
    $nombre = $producto['nombre'];
    $imagen = $producto['img'];
    $precio = $producto['precio'];

    $sql = "INSERT INTO productos(nombre_producto, imagen_producto, precio_producto) VALUES('$nombre', '$imagen', '$precio')";

    if($conexion->query($sql) === TRUE){
        echo "Producto insertado correctamente: PRODUCTO: <em>$nombre</em>, URL: <em>$imagen</em>, PRECIO: <em>$precio</em><br>";
    }else{
        echo "Error al insertar producto: " . $conexion->error;
    }
}

$conexion->close();

?>
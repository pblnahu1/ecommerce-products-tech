<?php

try {
  $conexion = new mysqli("localhost", "root", "", "ecommerce");
  if ($conexion->connect_error) {
    throw new Exception("Error de conexión a la Base de Datos " . $conexion->connect_error);
  }
?>
  <!-- <h6 style="text-align: center; color: blue; ">Conectado a la Base de Datos</h6> -->
<?php
} catch (Exception $e) {
?>
  <h6 style="text-align: center; color:red;"><?php echo $e->getMessage(); ?></h6>
<?php
}

?>
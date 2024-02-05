<?php
if (session_status() == PHP_SESSION_NONE) {
  session_start();
}

include("conex.php");

if (isset($_POST['enviar-registro'])) {
  if (
    strlen($_POST['nombre']) >= 1 &&
    strlen($_POST['apellido']) >= 1 &&
    strlen($_POST['edad']) >= 1 &&
    strlen($_POST['email']) >= 1 &&
    strlen($_POST['clave']) >= 1 &&
    strlen($_POST['metodo-pago'])
  ) {
    $nombreUsuario = trim($_POST['nombre']);
    $apellidoUsuario = trim($_POST['apellido']);
    $edadUsuario = trim($_POST['edad']);
    $emailUsuario = trim($_POST['email']);
    $claveUsuario = trim($_POST['clave']);
    $metodoPago = trim($_POST['metodo-pago']);

    $consultaSQL = "INSERT INTO usuarios (nombre_usuario, apellido_usuario, edad_usuario, email_usuario, clave_usuario, metodo_pago) VALUES('$nombreUsuario', '$apellidoUsuario', '$edadUsuario', '$emailUsuario', '$claveUsuario', '$metodoPago')";

    $resultado = mysqli_query($conexion, $consultaSQL);

    if ($resultado) {
      $_SESSION['nombre_usuario'] = $nombreUsuario;
      $_SESSION['apellido_usuario'] = $apellidoUsuario;
      header('Location:../../catalogo.php');
      exit();
    } else {
?>
      <h3 style="text-align: center; color:red;">Rellene los campos</h3>
<?php
    }
  }
}
?>
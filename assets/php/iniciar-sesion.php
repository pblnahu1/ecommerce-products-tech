<?php

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

include("conex.php");

if (isset($_POST['enviar-login'])) {
        $emailUser = $_POST['email-login'];
        $claveUser = $_POST['clave-login'];

        $consultaSQL = "SELECT nombre_usuario, apellido_usuario FROM usuarios WHERE email_usuario = '$emailUser' AND clave_usuario = '$claveUser'";

        $respuesta = mysqli_query($conexion, $consultaSQL);

        $fila = mysqli_fetch_assoc($respuesta);

        if ($fila) {
            $_SESSION['nombre_usuario'] = $fila['nombre_usuario'];
            $_SESSION['apellido_usuario'] = $fila['apellido_usuario'];
            header('Location:../../catalogo.php');
            exit();
        } else {
            $_SESSION['error-login'] = 'Ocurrió un error: Email o Contraseña son inválidos. Intente otra vez.';
            header('Location:../../login.php');   
            exit();
        }
    }
?>
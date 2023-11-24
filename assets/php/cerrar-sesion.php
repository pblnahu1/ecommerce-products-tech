<?php
session_start();
session_unset();
$_SESSION['msgCerrarSesion'] = 'Se ha cerrado la sesión';
header("Location:../../login.php");
exit();
?>
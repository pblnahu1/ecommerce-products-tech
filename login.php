<?php

if (session_status() == PHP_SESSION_NONE) {
  session_start();
}

include("assets/php/conex.php");

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NoteZone - Usuario</title>

  <!-- Link Icon -->
  <link rel="icon" href="assets/img/logos/logo.png">

  <!-- Links CSS -->
  <link rel="stylesheet" href="assets/css/header.css">
  <link rel="stylesheet" href="assets/css/footer.css">
  <link rel="stylesheet" href="assets/css/login.css">

  <!-- Link Swiper -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css">

  <!-- iconos fontawesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

  <!-- JS -->
  <script src="assets/js/mostrar-ventana.js" defer></script>
</head>

<body>
  <header id="header">
    <div class="logo-header">
      <img src="assets/img/logos/logo.png" width="80" height="80" alt="Logo Principal">
      <a class="header-link" href="index.php">NOTEZONE</a>
    </div>

    <input type="checkbox" id="menu" />
    <label for="menu">
      <i class="fas fa-bars menu-icon-mobile"></i>
    </label>

    <nav id="nav-bar" class="nav-bar">
      <a class="nav-link" href="index.php" title="Página Principal">Inicio</a>
      <!-- <a href="catalogo.php" class="nav-link" title="Ver todos los productos">Catálogo</a> -->
    </nav>
  </header>
  <?php
  // Verifico si existe el mensaje en la variable $_SESSION de cerrar-sesion.php y lo muestro
  if (isset($_SESSION['msgCerrarSesion'])) {
  ?>
    <div class="div-msg-cerrar-sesion" id="div-msg-cerrar-sesion">
      <p><?php echo $_SESSION['msgCerrarSesion']; ?></p>
      <button class="btn-cerrar" id="btn-cerrar">Cerrar</button>
    </div>
  <?php
    unset($_SESSION['msgCerrarSesion']);
  }
  ?>
  <main>

    <section class="sct-form">
      <form action="assets/php/registro.php" method="post">
        <h1>Crear Usuario</h1>
        <fieldset>
          <label for="lbl-nombre">Nombre</label>
          <input type="text" name="nombre" class="input-nombre" id="lbl-nombre" required>
          <label for="lbl-apellido">Apellido</label>
          <input type="text" name="apellido" class="input-apellido" id="lbl-apellido" required>
          <label for="lbl-edad">Edad</label>
          <input type="number" min="18" max="99" name="edad" class="input-edad" id="lbl-edad" required>
        </fieldset>

        <fieldset>
          <label for="lbl-email">Correo Electrónico</label>
          <input type="email" name="email" class="input-email" id="lbl-email" placeholder="example@gmail.com" required>
          <label for="lbl-clave">Crear Contraseña</label>
          <input type="password" name="clave" class="input-clave" id="lbl-clave" required>
          <label for="lbl-confirmar-clave">Confirmar Contraseña</label>
          <input type="password" name="confirmar-clave" class="input-confirmar-clave" id="lbl-confirmar-clave" required>
        </fieldset>

        <fieldset>
          <!-- <h2>Método de Pago</h2> -->
          <h2>Método de Pago</h2>
          <label for="lbl-credito">
            <input type="radio" name="metodo-pago" class="input-metodo-pago" id="lbl-credito" value="Tarjeta de Crédito" required>
            Tarjeta de Crédito
          </label>
          <label for="lbl-debito">
            <input type="radio" name="metodo-pago" class="input-metodo-pago" id="lbl-debito" value="Tarjeta de Débito" required> Tarjeta de Débito
          </label>
          <label for="lbl-efectivo">
            <input type="radio" name="metodo-pago" class="input-metodo-pago" id="lbl-efectivo" value="Efectivo (Pago Fácil)" required>
            Efectivo (Pago Fácil)
          </label>
        </fieldset>

        <input type="submit" name="enviar-registro" value="Registrarse" class="btn-submit">
        <?php include("assets/php/registro.php"); ?>
      </form>
    </section>

    <section class="sct-form">

      <form action="assets/php/iniciar-sesion.php" method="post">
        <h1>Iniciar Sesión</h1>
        <fieldset>
          <label for="lbl-email-login">Email</label>
          <input type="email" name="email-login" class="input-email" id="lbl-email-login" placeholder="example@gmail.com" required>
          <label for="lbl-clave-login">Contraseña</label>
          <input type="password" name="clave-login" class="input-clave" id="lbl-clave-login" required>
        </fieldset>
        <input type="submit" name="enviar-login" value="Entrar" class="btn-submit">
        <?php
        include("assets/php/iniciar-sesion.php");
        if (isset($_SESSION['error-login'])) {
        ?>
          <div class="div-msg-error" id="div-msg-error">
            <p><?php echo $_SESSION["error-login"]; ?></p>
            <button class="btn-cerrar" id="btn-cerrar">Cerrar</button>
          </div>
        <?php
          unset($_SESSION['error-login']);
        }
        ?>
      </form>
    </section>
  </main>

  <section class="maps">
    <div class="txt-ubi">
      <h2>Ubicación</h2>
    </div>
    <iframe title="Mapa" class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26253.896922674234!2d-58.388026511442156!3d-34.66134141832057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3335230bd052b%3A0x9d632a18eea90a31!2sAvellaneda%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1698596364060!5m2!1ses!2sar" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </section>

  <h1 class="txt-noticias">Contactate con nosotros</h1>

  <footer>
    <div class="footer-container">
      <div class="item">
        <span class="location-span">Buenos Aires, Argentina</span>
        <br>
        <a href="https://www.instagram.com" class="social-icon"><i class="fab fa-instagram"></i> Instagram</a>
        <a href="https://www.x.com" class="social-icon"><i class="fab fa-twitter"></i> Twitter</a>
        <br>
        <a href="https://www.facebook.com" class="social-icon"><i class="fab fa-facebook"></i> Facebook</a>
        <a href="https://www.youtube.com" class="social-icon"><i class="fab fa-youtube"></i> Youtube</a>
      </div>
      <div class="item">
        <span class="privacidad-span">Esta página respeta tu privacidad y se compromete a proteger la información personal que compartes con nosotros. Consulta nuestra política de privacidad para obtener más detalles sobre cómo manejamos y utilizamos tus datos.</span>
      </div>
    </div>
  </footer>
</body>

</html>
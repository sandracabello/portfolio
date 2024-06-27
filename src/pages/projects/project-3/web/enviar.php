
<?php
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$titulo = "Correo desde la web";
$msjCorreo = "Nombre: $nombre\n Teléfono: $telefono";
$para = "";  // Insertar email

if (mail($para, $titulo, $msjCorreo)) {
    echo "<script>window.location.href='index.html?enviado=true';</script>";
    exit;
}
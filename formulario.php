<?php

if ($_POST){
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cursosql";

    $connection = new mysqli($servername, $username, $password, $dbname);

    if ($connection->connect_error) {
        die("Conexión fallida: " . $connection->connect_error);
    }

    $sql = "INSERT INTO usuario (nombre, apellido, email)
    VALUES ('$nombre', '$apellido', '$email')";

    if ($connection->query($sql) === TRUE) {
        echo "Formulario enviado correctamente";
    } else {
        echo "Error: " . $sql . "<br>" . $connection->error;
    }

    $connection->close();

}
?>
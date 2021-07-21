
<?php

$servidor = "localhost";
$usuario = "root";
$senha = "";
$dbname = "usuario";

$conn = mysqli_connect("$servidor", "$usuario", "$senha", "$dbname");

if(!$conn) {
    echo "Erro ao conectar na base de dados";
}

?>
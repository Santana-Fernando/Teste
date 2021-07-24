
<?php

$servidor = "127.0.0.1";
$usuario = "root";
$senha = "Fern@nd01331";
$dbname = "carregamento";

$conn = mysqli_connect("$servidor", "$usuario", "$senha", "$dbname");

if(!$conn) {
    echo "Erro ao conectar na base de dados";
} 


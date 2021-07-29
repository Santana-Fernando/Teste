
<?php

$servidor = "127.0.0.1"; // seu host
$usuario = "root"; // seu usuário
$senha = "Fern@nd01331"; // sua senha
$dbname = "carregamento"; //crie uma base de dados chamada carregamento

$conn = mysqli_connect("$servidor", "$usuario", "$senha", "$dbname");

if(!$conn) {
    echo "Erro ao conectar na base de dados";
} 


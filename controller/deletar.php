<?php 
    include_once("../controller/conexao.php");

    $id = $_POST['Id'];

    $registros = "DELETE FROM registros WHERE ID = '$id'";

    $resultado = mysqli_query($conn, $registros);

    if($resultado){
        echo "Registro excluido com sucesso!!";
    } else {
        echo "Erro ao excluir registro $registros";
    }

?>
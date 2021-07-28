<?php 
    include_once("../controller/conexao.php");


    $registros = "SELECT * FROM registros;";

    $resultado = mysqli_query($conn, $registros);

    $data = array();

 
    while($row = mysqli_fetch_assoc($resultado)){
        $data[] = $row;
    }

    echo json_encode($data);

?>
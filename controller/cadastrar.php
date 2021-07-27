<?php 
    include_once("../controller/conexao.php");

    $data = $_POST['data'];
    $hora_inicial = $_POST['hora_inicial'];
    $hora_final = $_POST['hora_final'];
    $turno = $_POST['turno'];
    $motorista = $_POST['motorista'];
    $requisicao = $_POST['requisicao'];
    $material = $_POST['material'];
    $peso_entrada = $_POST['peso_entrada'];
    $peso_saida = $_POST['peso_saida'];
    $diferenca_de_peso = $_POST['diferenca_de_peso'];
    $tag = $_POST['tag'];
    $KM = $_POST['KM'];
    $origem = $_POST['origem'];
    $destino = $_POST['destino'];
    $observacoes = $_POST['observacoes'];

    
    echo "\n $data";
    echo "\n $hora_inicial";
    echo "\n $hora_final";
    echo "\n $turno";
    echo "\n $motorista";
    echo "\n $requisicao";
    echo "\n $material";
    echo "\n $peso_entrada";
    echo "\n $peso_saida";
    echo "\n $diferenca_de_peso";
    echo "\n $tag";
    echo "\n $KM";
    echo "\n $origem";
    echo "\n $destino";
    echo "\n $observacoes";
        

    $registros = "INSERT INTO registros (data, hora_inicial, hora_final, turno, motorista, requisicao, material, peso_entrada, peso_saida, diferenca_de_peso, tag, KM, origem , destino, observacoes) VALUES ('$data','$hora_inicial','$hora_final','$turno','$motorista','$requisicao','$material','$peso_entrada','$peso_saida','$diferenca_de_peso','$tag','$KM','$origem','$destino','$observacoes')";

    $resultado = mysqli_query($conn, $registros);

    if($resultado){
        echo "Cadastro feito com sucesso!!";
    } else {
        echo "Erro ao cadastrar $registros";
    }
?>
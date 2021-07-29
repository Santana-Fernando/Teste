<?php 
    include_once("../controller/conexao.php");

    $id = $_POST['Id'];
    $data = $_POST['data'];
    $hora_inicial = $_POST['hora_inicial'];
    $hora_final = $_POST['hora_final'];
    $turno = $_POST['turno'];
    $motorista = $_POST['motorista'];
    $requisicao = $_POST['requisicao'];
    $material = $_POST['material'];
    $peso_entrada = $_POST['peso_entrada'];
    $peso_saida = $_POST['peso_saida'];
    $tag = $_POST['tag'];
    $KM = $_POST['KM'];
    $origem = $_POST['origem'];
    $destino = $_POST['destino'];
    $observacoes = $_POST['observacoes'];

    $diferenca_de_peso = $peso_saida - $peso_entrada;

    if($id){
        $registros = "UPDATE registros SET data = '$data', hora_inicial = '$hora_inicial', hora_final = '$hora_final', turno = '$turno', motorista = '$motorista', requisicao = '$requisicao', material = '$material', peso_entrada = '$peso_entrada', peso_saida = '$peso_saida', diferenca_de_peso = '$diferenca_de_peso', tag = '$tag', KM = '$KM', origem='$origem' , destino = '$destino', observacoes = '$observacoes'  WHERE Id = '$id'";
        
        $resultado = mysqli_query($conn, $registros);
    
        if($resultado){
            echo "Atualização feito com sucesso!!";
        } else {
            echo "Erro ao Atualização $registros";
        }
    } else {
        $registros = "INSERT INTO registros (data, hora_inicial, hora_final, turno, motorista, requisicao, material, peso_entrada, peso_saida, diferenca_de_peso, tag, KM, origem , destino, observacoes) VALUES ('$data','$hora_inicial','$hora_final','$turno','$motorista','$requisicao','$material','$peso_entrada','$peso_saida','$diferenca_de_peso','$tag','$KM','$origem','$destino','$observacoes')";
    
        $resultado = mysqli_query($conn, $registros);
    
        if($resultado){
            echo "Cadastro feito com sucesso!!";
        } else {
            echo "Erro ao cadastrar $registros";
        }
    }
    
?>
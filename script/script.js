const form = document.querySelector("form")


form.onsubmit = (e) => {
    e.preventDefault()

    let ajax = new XMLHttpRequest()
    ajax.open("POST", "../controller/cadastrar.php", true)
    ajax.onload = () => {
        if(ajax.readyState == 4 && ajax.status == 200) {
            let response = ajax.response;

            alert(response)

            window.location.reload();
        }
    }
    let formData = new FormData(form)
    ajax.send(formData)
}

window.onload = function() {
    listar()
}

function listar() {
    let ajax = new XMLHttpRequest()
    ajax.open("GET", "../controller/listar.php", true)
    ajax.onreadystatechange = () => {
        if(ajax.readyState == 4 && ajax.status == 200) {
            let response = ajax.response;

            let table = document.querySelector("#table")
            
            let data = JSON.parse(response)
            for(let i = 0; i < data.length; i++ ){
                let row = `
                            <tr>
                                <td>${data[i].Id}</td>
                                <td>${data[i].data}</td>
                                <td>${data[i].hora_inicial}</td>
                                <td>${data[i].hora_final}</td>
                                <td>${data[i].turno}</td>
                                <td>${data[i].motorista}</td>
                                <td>${data[i].requisicao}</td>
                                <td>${data[i].material}</td>
                                <td>${data[i].peso_entrada}</td>
                                <td>${data[i].peso_saida}</td>
                                <td>${data[i].diferenca_de_peso}</td>
                                <td>${data[i].tag}</td>
                                <td>${data[i].KM}</td>
                                <td>${data[i].origem}</td>
                                <td>${data[i].destino}</td>
                                <td>${data[i].observacoes}</td>
                                <td><button onclick="editar(this)" style="background-color: #dccd04;">Editar</button></td>
                                <td><button onclick="excluir(this)" style="background-color: #aa0404;">Excluir</button></td>
                            </tr>
                `

                table.innerHTML += row
            }
        }
    }
    ajax.send()
}

function editar(n) {
    let row = n.parentElement.parentElement
    console.log(document.getElementsByName('turno')[0].value)
    
    document.getElementsByName('Id')[0].value = row.cells[0].innerHTML;
    document.getElementsByName('data')[0].value = row.cells[1].innerHTML;
    document.getElementsByName('hora_inicial')[0].value = row.cells[2].innerHTML;
    document.getElementsByName('hora_final')[0].value = row.cells[3].innerHTML;
    document.getElementsByName('turno')[0].value = row.cells[4].innerHTML;
    document.getElementsByName('motorista')[0].value = row.cells[5].innerHTML;
    document.getElementsByName('requisicao')[0].value = row.cells[6].innerHTML;
    document.getElementsByName('material')[0].value = row.cells[7].innerHTML;
    document.getElementsByName('peso_entrada')[0].value = row.cells[8].innerHTML;
    document.getElementsByName('peso_saida')[0].value = row.cells[9].innerHTML;
    document.getElementsByName('diferenca_de_peso')[0].value = row.cells[10].innerHTML;
    document.getElementsByName('tag')[0].value = row.cells[11].innerHTML;
    document.getElementsByName('KM')[0].value= row.cells[12].innerHTML ;
    document.getElementsByName('origem')[0].value = row.cells[13].innerHTML;
    document.getElementsByName('destino')[0].value = row.cells[14].innerHTML;
    document.getElementsByName('observacoes')[0].value = row.cells[15].innerHTML;

    document.getElementsByName('data')[0].focus()
    
}

function excluir(n) {
    if(confirm("Você tem certeza que quer excluir esse registro?")){
        let row = n.parentElement.parentElement
        document.getElementsByName('Id')[0].value = row.cells[0].innerHTML;
    
        let ajax = new XMLHttpRequest()
        ajax.open("POST", "../controller/deletar.php", true)
        ajax.onload = () => {
            if(ajax.readyState == 4 && ajax.status == 200) {
                let response = ajax.response;
    
                alert(response)
    
                window.location.reload();
            }
        }
        let formData = new FormData(form)
        ajax.send(formData)
    }

}

function calcularDiferencaDePreco() {
    let entrada = document.getElementsByName("peso_entrada")[0]
    let saida = document.getElementsByName("peso_saida")[0]
    let diferenca_de_peso = document.getElementsByName("diferenca_de_peso")[0]
    
    let diferenca = saida.value - entrada.value
    
    if (diferenca < 0) diferenca_de_peso.value = 0
    else diferenca_de_peso.value = diferenca

}
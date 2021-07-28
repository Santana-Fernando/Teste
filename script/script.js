const form = document.querySelector("form")


form.onsubmit = (e) => {
    e.preventDefault()

    let ajax = new XMLHttpRequest()
    ajax.open("POST", "../controller/cadastrar.php", true)
    ajax.onload = () => {
        if(ajax.readyState == 4 && ajax.status == 200) {
            let response = ajax.response;

            alert(response)
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
    alert("Editando")
}

function excluir(n) {
    alert("Excluindo")
}

function calcularDiferencaDePreco() {
    let entrada = document.querySelector("#peso_entrada")
    let saida = document.querySelector("#peso_saida")
    let diferenca_de_peso = document.querySelector("#diferenca_de_peso")
    
    let diferenca = saida.value - entrada.value
    
    if (diferenca < 0) diferenca_de_peso.value = 0
    else diferenca_de_peso.value = diferenca

}
const form = document.querySelector("form")

form.onsubmit = (e) => {
    e.preventDefault()

    let ajax = new XMLHttpRequest()
    ajax.open("POST", "../controller/cadastrar.php")
    ajax.onload = () => {
        if(ajax.readyState == 4 && ajax.status == 200) {
            let response = ajax.response;

            console.log(response)
        }
    }
    let formData = new FormData(form)
    ajax.send(formData)
}
const closeMessage = document.querySelector("#close")
const message = document.querySelector("#message")

closeMessage.addEventListener("click", function (){
    message.style.display = "none"
})

var mensagem = setTimeout(function() {
    alert ("Cadastro feito com sucesso!");
}, 5000)
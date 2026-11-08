document.addEventListener("DOMContentLoaded", () => {
    //Captura os paramentros transmitidos pela URL (ex: ?id=ip)

    const urlParams = new URLSearchParams(window.location.search);
    const idTopicos = urlParams.get("id");

    const dados = topicosRede[idTopicos];

    if(dados) {
        document.getElementById("page-titulo").textContent = dados.titulo;
        document.getElementById("corpo-topico").innerHTML = dados.conteudo;
    }else {
        document.getElementById("titulo-topico").textContent = "Tópico não encontrado";
        document.getElementById("corpo-topico").innerHTML = "<p> O estudo solicitado não existe ou foi removido</p>";
    }
        
});
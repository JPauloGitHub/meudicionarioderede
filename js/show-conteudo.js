document.addEventListener("DOMContentLoaded", () => {
    //Captura os paramentros transmitidos pela URL (ex: ?id=ip)

    const urlParams = new URLSearchParams(window.location.search);
    const idConteudo = urlParams.get("id");

    const dados = conteudoRede[idConteudo];

    
    if(dados) {
        document.getElementById("titulo-page").textContent = dados.titulo;
        document.getElementById("titulo-h1").textContent = dados.titulo;
        document.getElementById("corpo-conteudo").innerHTML = dados.conteudo;
    }else {
        document.getElementById("titulo-conteudo").textContent = "Tópico não encontrado";
        document.getElementById("corpo-conteudo").innerHTML = "<p> O estudo solicitado não existe ou foi removido</p>";
    }
        
});
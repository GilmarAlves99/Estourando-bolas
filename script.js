// Criando a função que adicionara as bolas

function addBola() {
    //criando a div
    var bola = document.createElement("div");
    // colocando uma classe na div
    bola.setAttribute("class", "bola");

    // criando os pontos X e Y para gerar a localização aleatoria na tela
    var p1 = Math.floor(Math.random() * 1200);
    var p2 = Math.floor(Math.random() * 500);
    // passando o style para a classe
    bola.setAttribute("style", "left:" + p1 + "px;top:" + p2 + "px;");
    // aqui fara quando clicar na bola chamar a função estourar()
    bola.setAttribute("onclick", "estourar(this)");
    // aqui ira ser passado uma cor ALEATORIA para cada bola criada
    bola.style.backgroundColor = '#' + (Math.random().toString(16) + "000000").substring(2, 8);
    //Aqui iremos por na tela o elemento
    document.body.appendChild(bola);
}
// a função ira remover o elemento selecionado
function estourar(elemento) {
    document.body.removeChild(elemento);
}
// irtervalo de 1s para cada bola aparecer na tela
function iniciar() {
    setInterval(addBola, 1000);

}

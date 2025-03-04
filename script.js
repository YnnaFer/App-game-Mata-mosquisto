var altura = 0
var largura = 0

function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustarTamanhoPalcoJogo()

function posicaoRandomica() { // Função criada para que acesse a tag body depois de ser processado

    var posicaoX = Math.floor(Math.random() * altura) - 90
    var posicaoY = Math.floor(Math.random() * largura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    console.log(posicaoX, posicaoY)

    //  Criar o elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className =  tamanhoAleatorio() //Definido a class 
    mosquito.style.left = posicaoX + 'px' //Define a posição horizontal (X).
    mosquito.style.top = posicaoY + 'px' //Define a posição vertical (Y).
    mosquito.style.position = 'absolute'


    document.body.appendChild(mosquito) //Insere o elemento <img> no body da página, tornando-o visível na tela.

}


function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)


    switch (classe) {
        case 0:
            return 'mosquito1';

        case 2:
            return 'mosquito2';

        case 3:
            return 'mosquito3';

    }

}



//Comentario em Linha.

/* 

Comentario em multiplas linhas.

*/

/*
Ex:

    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado

*/

// - passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')


// - passo 2 - dar um jeito de identificar o clique do usuário no botão

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // - passo 3 - desmarcar o botão selecionado anterior
        desmarcaBotaoSelecionado(); //Codigo Fatorado 

        //- passo 4 - marcar o botão clicado como se estivesse selecionada.
        botao.classList.add('selecionado');//COdigo Fatorado.

        //- passo 5 - esconder a imagem anterior.
        escondeImagem();

        //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado.
        imagens[indice].classList.add('ativa');
    })
});


function escondeImagem() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desmarcaBotaoSelecionado() {
    const botaoselecionado = document.querySelector('.selecionado');
    botaoselecionado.classList.remove('selecionado');
}


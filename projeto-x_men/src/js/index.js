/* O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado
    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo:
        Passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        Passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        Passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        Passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        Passo 2 - alterar a imagem do personagem grande
        Passo 3 - alterar o nome do personagem grande
        Passo 4 - alterar a descrição do personagem grande */
/* OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo:
    Passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles */
const personagens = document.querySelectorAll('.personagem');
    // Passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
        // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        removerSelecaoDoPersonagem();
        personagem.classList.add('selecionado');
        /* OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande:
        Passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele*/
        alterarImagemPersonagemSelecionado(personagem);
        // Passo 2 - alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);
        // Passo 3 - alterar a descrição do personagem grande
        alterarDescricaoPersonagem(personagem);
    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    // Passo 4 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/image/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
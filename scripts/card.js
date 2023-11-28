document.addEventListener('DOMContentLoaded', function recuperarPesquisa() {

    if (pesquisas.length > 0) {
        pesquisas.forEach(function (pesquisa) {
            criarCard(pesquisa.id, pesquisa.nome, pesquisa.data, pesquisa.imagem);
        });


    }
});

function criarCard(id, nome, data, imagemUrl) {

    // Crie um novo elemento div para representar o card
    var novoCard = document.createElement('div');
    novoCard.classList.add('box1', 'pesquisa-temporaria-');

    // Crie um link dentro do card
    var link = document.createElement('a');
    link.href = 'acoes-pesquisa.html?id=' + id;
    link.classList.add('box1Content');

    // Adicione a imagem ao link
    var imagem = document.createElement('img');
    imagem.src = imagemUrl;
    imagem.alt = 'Imagem da pesquisa';
    imagem.classList.add('img');
    link.appendChild(imagem);

    // Adicione o nome ao link
    var nomeElemento = document.createElement('span');
    nomeElemento.textContent = nome;
    nomeElemento.classList.add('box1Content');
    link.appendChild(nomeElemento);

    // Adicione a data ao link
    var dataElemento = document.createElement('span');
    dataElemento.textContent = data;
    dataElemento.classList.add('data');
    link.appendChild(dataElemento);

    // Adicione o id como um atributo personalizado ao card
    novoCard.setAttribute('data-id', id);

    // Adicione o link ao card
    novoCard.appendChild(link);

    // Adicione o card ao conteúdo da página
    var contentDiv = document.querySelector('.content');
    contentDiv.appendChild(novoCard);
}
document.addEventListener('DOMContentLoaded', function recuperarPesquisa() {

    if (pesquisas.length > 0) {
        pesquisas.forEach(function (pesquisa) {
            criarCard(pesquisa.idUsuario, pesquisa.id, pesquisa.nome, pesquisa.data, pesquisa.imagem);
        });


    }
});

function criarCard(idUsuario, id, nome, data, imagemUrl) {
    var logado = JSON.parse(localStorage.getItem('usuarioLogado')) || [];
    if(logado == idUsuario){
    var novoCard = document.createElement('div');
    novoCard.classList.add('box1', 'pesquisa-temporaria-');

    var link = document.createElement('a');
    link.href = 'acoes-pesquisa.html?id=' + id;
    link.classList.add('box1Content');

    var imagem = document.createElement('img');
    imagem.src = imagemUrl;
    imagem.alt = 'Imagem da pesquisa';
    imagem.classList.add('img');
    link.appendChild(imagem);

    var nomeElemento = document.createElement('span');
    nomeElemento.textContent = nome;
    nomeElemento.classList.add('box1Content');
    link.appendChild(nomeElemento);

    var dataElemento = document.createElement('span');
    dataElemento.textContent = data;
    dataElemento.classList.add('data');
    link.appendChild(dataElemento);

    novoCard.setAttribute('data-id', id);

    novoCard.appendChild(link);

    var contentDiv = document.querySelector('.content');
    contentDiv.appendChild(novoCard);
}
}
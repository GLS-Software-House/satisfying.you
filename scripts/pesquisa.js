// Recuperar pesquisas do localStorage
var pesquisas = JSON.parse(localStorage.getItem('pesquisas')) || [];

// Cadastro de pesquisa
function criarPesquisa() {

    // Obter os valores dos campos do formulário
    var nomePesquisa = document.getElementById('nome-pesquisa').value;
    var dataPesquisa = document.getElementById('data').value;
    var urlImagem = document.getElementById('my-file-input').value;

    // Criar um objeto representando a pesquisa
    var novaPesquisa = {
        id: pesquisas.length + 1,
        nome: nomePesquisa,
        data: dataPesquisa,
        imagem: urlImagem
    };

    // Adicionar a nova pesquisa à lista de pesquisas temporárias
    pesquisas.push(novaPesquisa);

    // Armazenar a lista atualizada no Local Storage
    localStorage.setItem('pesquisas', JSON.stringify(pesquisas));

    // Redirecionar para a página home.html
    // window.location.href = 'home.html';

}

// Recuperação de pesquisa
function recuperarPesquisa() {

    // Você pode iterar sobre as pesquisas e fazer o que for necessário com os dados
    pesquisas.forEach(function (pesquisa) {
        // console.log('ID:', pesquisa.id);
        // console.log('Nome:', pesquisa.nome);
        // console.log('Data:', pesquisa.data);
        // console.log('Imagem:', pesquisa.imagem);
        // console.log('---------------------');
    });
}

// Alteração de pesquisa
function alterarPesquisa() {
    // Obter o ID da pesquisa que você deseja alterar (substitua 'ID_DA_PESQUISA' pelo ID real)
    var idPesquisa = 'ID_DA_PESQUISA';

    // Encontrar a pesquisa com base no ID
    var pesquisaParaAlterar = pesquisas.find(function (pesquisa) {
        return pesquisa.id === idPesquisa;
    });

    if (pesquisaParaAlterar) {
        // Alterar os dados conforme necessário
        pesquisaParaAlterar.nome = 'Novo Nome';
        pesquisaParaAlterar.data = 'Nova Data';
        pesquisaParaAlterar.imagem = 'Nova URL da Imagem';

        // Atualizar a lista no Local Storage
        localStorage.setItem('pesquisas', JSON.stringify(pesquisas));

        // console.log('Pesquisa alterada com sucesso!');
    } else {
        // console.log('Pesquisa não encontrada.');
    }
}

// Exclusão de pesquisa
function excluirPesquisa() {

}

// Geração de card
function gerarCard(nome, data, imagemUrl) {
    // Crie um novo elemento div para representar o card
    var novoCard = document.createElement('div');
    novoCard.classList.add('box1', 'pesquisa-temporaria-');

    // Crie um link dentro do card
    var link = document.createElement('a');
    link.href = 'acoes-pesquisa.html';
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

    // Adicione o link ao card
    novoCard.appendChild(link);

    // Adicione o card ao conteúdo da página
    var contentDiv = document.querySelector('.content');
    contentDiv.appendChild(novoCard);
}

// Filtragem de pesquisa
function filtrarPesquisa() {

}




function exibirImagem() {
    var input = document.getElementById('my-file-input');
    var imagem = document.getElementById('imagem');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            imagem.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
    document.getElementById('file-uploaded-name').value = input.files[0].name;
}

// function openModal() {
//     const modal = document.querySelector(".modal");
//     modal.style.display = "block";
// }
// document.querySelector(".modal-open").addEventListener("click", openModal);
// document.querySelector(".modal-close").addEventListener("click", () => {
//     document.querySelector(".modal").style.display = "none";
// });
// document.querySelector(".modal-confirm").addEventListener("click", () => {
// });

function apagarPesquisa(nomePesquisa) {

    // Encontre a pesquisa pelo nome e remova-a
    // pesquisasTemporarias = pesquisasTemporarias.filter(function (pesquisa) {
    //     return pesquisa.nome !== nomePesquisa;
    // });

    pesquisaExcluida = pesquisasTemporarias.filter(function (pesquisa) {
        return pesquisa.nome == nomePesquisa;
    });

    localStorage.removeItem(pesquisaExcluida)

    // Atualize as pesquisas temporárias no localStorage
    localStorage.setItem('pesquisasTemporarias', JSON.stringify(pesquisasTemporarias));

    // Recarregue a página para refletir as alterações
    location.reload();

    //window.location.href = 'home.html';
}

// home.js
document.addEventListener('DOMContentLoaded', function () {
    // Recuperar pesquisas temporárias do localStorage
    var pesquisasTemporarias = JSON.parse(localStorage.getItem('pesquisasTemporarias')) || [];

    // Verificar se há pesquisas temporárias
    if (pesquisasTemporarias.length > 0) {
        // Iterar sobre as pesquisas temporárias e criar os cards
        pesquisasTemporarias.forEach(function (pesquisa) {
            gerarCard(pesquisa.nome, pesquisa.data, pesquisa.imagem);
        });

    
    }
});
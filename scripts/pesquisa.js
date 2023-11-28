// Recuperar pesquisas do localStorage
var pesquisas = JSON.parse(localStorage.getItem('pesquisas')) || [];

// Cadastro de pesquisa
function criarPesquisa() {

    // Obter os valores dos campos do formulário
    var nomePesquisa = document.getElementById('nome-pesquisa').value;
    var dataPesquisa = document.getElementById('data').value;
    var urlImagem = document.getElementById('file-uploaded-name').value;

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
    window.location.href = 'home.html';

}



// Alteração de pesquisa
function alterarPesquisa() {

    // Obtém o id da URL
    var url_string = document.referrer;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    console.log(id);

    pesquisas.forEach(function (pesquisa) {
        if (pesquisa.id == id){
            pesquisa.nome = document.getElementById('nome-pesquisa').value;
            pesquisa.data = document.getElementById('data').value;
            pesquisa.imagem = document.getElementById('file-uploaded-name').value;
            localStorage.setItem('pesquisas', JSON.stringify(pesquisas));
        }
        });

    // Encontra a pesquisa pelo id
    var pesquisaParaAlterar = pesquisas.find(function (pesquisa) {
        return pesquisa.id === id;
    });
}

// Exclusão de pesquisa
function excluirPesquisa() {

}



// Filtragem de pesquisa
function filtrarPesquisa() {
    
        // Obter o valor do campo de filtro
        var filtro = document.getElementById('filtro').value;
    
        // Filtrar as pesquisas pelo nome
        var pesquisasFiltradas = pesquisas.filter(function (pesquisa) {
            return pesquisa.nome.toLowerCase().includes(filtro.toLowerCase());
        });
    
        // Limpar a lista de pesquisas
        document.getElementById('content').innerHTML = '';
    
        // Iterar sobre as pesquisas filtradas e criar os cards
        pesquisasFiltradas.forEach(function (pesquisa) {
            criarCard(pesquisa.id, pesquisa.nome, pesquisa.data, pesquisa.imagem);
        });
}

function exibirImagem() {
    var urlImagem = document.getElementById('file-uploaded-name').value;
    if (urlImagem) {
        document.getElementById('imagem').src = urlImagem;
    }
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
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
            // Obtém a URL da página
            var url_string = window.location.href;
        
            // Cria um objeto URL
            var url = new URL(url_string);
            
            // Obtém o valor do parâmetro "id" da URL
            var id = url.searchParams.get("id");
            
            // Exibe o valor do ID no console
            console.log("ID:", id);
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
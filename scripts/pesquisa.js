

var pesquisas = JSON.parse(localStorage.getItem('pesquisas')) || [];


function criarPesquisa() {
   
    var url_string = document.referrer;
    var url = new URL(url_string);

    
    var nomePesquisa = document.getElementById('nome-pesquisa').value;
    var dataPesquisa = document.getElementById('data').value;
    var urlImagem = document.getElementById('file-uploaded-name').value;

    
    var novaPesquisa = {
        id: pesquisas.length + 1,
        idUsuario: url.searchParams.get("idUsuario"),
        nome: nomePesquisa,
        data: dataPesquisa,
        imagem: urlImagem,
        pessimo: 0,
        ruim: 0,
        neutro: 0,
        bom: 0,
        excelente: 0,
        total: 0,
    };

    pesquisas.push(novaPesquisa);

    localStorage.setItem('pesquisas', JSON.stringify(pesquisas));
    var logado = JSON.parse(localStorage.getItem('usuarioLogado')) || [];
    window.location.href = 'home.html' + '?idUsuario=' + logado;

}

contabilizarVoto = function (voto) {
    var url_string = document.referrer;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    pesquisas.forEach(function (pesquisa) {
        if (pesquisa.id == id) {
            pesquisa[voto]++;
            pesquisa.total++;
        }
    });
    localStorage.setItem('pesquisas', JSON.stringify(pesquisas));
    window.location.href = 'resultado.html?id=' + id;
}


function alterarPesquisa() {

    var url_string = document.referrer;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    pesquisas.forEach(function (pesquisa) {
        if (pesquisa.id == id){
            pesquisa.nome = document.getElementById('nome-pesquisa').value;
            pesquisa.data = document.getElementById('data').value;
            pesquisa.imagem = document.getElementById('file-uploaded-name').value;
            localStorage.setItem('pesquisas', JSON.stringify(pesquisas));
        }
        });

}

function filtrarPesquisa() {
    
        var filtro = document.getElementById('filtro').value;
    
        var pesquisasFiltradas = pesquisas.filter(function (pesquisa) {
            return pesquisa.nome.toLowerCase().includes(filtro.toLowerCase());
        });
    
        document.getElementById('content').innerHTML = '';
    
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


 function apagarPesquisa() {

     const nomePesquisa = document.getElementById('nome-pesquisa').value;
     const lista = JSON.parse(window.localStorage.getItem('pesquisas'));

     for (let i = 0; i < lista.length; i++) {
         if (lista[i].nome === nomePesquisa) {
             lista.splice(i, 1);
             break;
         }
     }

     window.localStorage.setItem("pesquisas", JSON.stringify(lista));
     window.location.href = 'home.html';
     window.location.reload();
     
 }




// home.js
document.addEventListener('DOMContentLoaded', function () {
   
    var pesquisasTemporarias = JSON.parse(localStorage.getItem('pesquisasTemporarias')) || [];
    if (pesquisasTemporarias.length > 0) {
        pesquisasTemporarias.forEach(function (pesquisa) {
            gerarCard(pesquisa.nome, pesquisa.data, pesquisa.imagem);
        });

    
    }
});
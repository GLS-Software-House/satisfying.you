const fileInput = document.querySelector("#my-file-input");
        const textInput = document.querySelector("#file-uploaded-name");

        function exibirImagem() {
            var urlImagem = document.getElementById('file-uploaded-name').value;
            if (urlImagem) {
                document.getElementById('imagem').src = urlImagem;
            }
        }

        function criarNovaPesquisa() {
            // Obter os valores dos campos do formulário
            var nomePesquisa = document.getElementById('nome-pesquisa').value;
            var dataPesquisa = document.getElementById('data').value;
            var urlImagem = document.getElementById('file-uploaded-name').value;
        
            // Criar um objeto representando a pesquisa
            var novaPesquisa = {
                nome: nomePesquisa,
                data: dataPesquisa,
                imagem: urlImagem
            };
        
            // Obter pesquisas temporárias existentes do Local Storage (se houver)
            var pesquisasTemporarias = JSON.parse(localStorage.getItem('pesquisasTemporarias')) || [];
        
            // Adicionar a nova pesquisa à lista de pesquisas temporárias
            pesquisasTemporarias.push(novaPesquisa);
        
            // Armazenar a lista atualizada no Local Storage
            localStorage.setItem('pesquisasTemporarias', JSON.stringify(pesquisasTemporarias));
        
            // Redirecionar para a página home.html
            window.location.href = 'home.html';
        }

        // function criarNovaPesquisa() {
        //     // Obter os valores dos campos do formulário
        //     var nomePesquisa = document.getElementById('nome-pesquisa').value;
        //     var dataPesquisa = document.getElementById('data').value;
        //     var urlImagem = document.getElementById('file-uploaded-name').value;

        //     // Criar um objeto representando a pesquisa
        //     var novaPesquisa = {
        //         nome: nomePesquisa,
        //         data: dataPesquisa,
        //         imagem: urlImagem
        //     };

        //     // Obter pesquisas existentes do Local Storage (se houver)
        //     var pesquisasSalvas = JSON.parse(localStorage.getItem('pesquisas')) || [];

        //     // Adicionar a nova pesquisa à lista de pesquisas
        //     pesquisasSalvas.push(novaPesquisa);

        //     // Armazenar a lista atualizada no Local Storage
        //     localStorage.setItem('pesquisas', JSON.stringify(pesquisasSalvas));
            
        //     window.location.href = 'home.html';
        //     criarCard(nomePesquisa, dataPesquisa, urlImagem)
           
        // }

    
function criarConta() {
    // Obter os valores dos campos do formulário
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;
    var repetirSenha = document.getElementById('repeatPassword').value;

    // Verificar se as senhas coincidem
    if (senha !== repetirSenha) {
        // Exibir mensagem de erro
        document.getElementById('erroSenha').textContent = 'Senhas não conferem.';
    } else {
        // Limpar mensagem de erro
        document.getElementById('erroSenha').textContent = '';

        // Criar um objeto com os dados do usuário
        var usuario = {
            email: email,
            senha: senha
        };

        // Armazenar os dados no Local Storage
        localStorage.setItem('usuario', JSON.stringify(usuario));

        // Redirecionar para a página desejada (substitua 'index.html' pela página desejada)
        window.location.href = 'index.html';
    }
}